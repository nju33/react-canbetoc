import { pipe } from 'fp-ts/lib/function'
import { fold, fromNullable, mapNullable, Option } from 'fp-ts/lib/Option'
import { TraitTocEntryDomAdaptor } from '../entities/toc-entry-dom-adaptor'

export class TocEntryDomAdaptor implements TraitTocEntryDomAdaptor {
  findElementById(id: string): Option<HTMLElement> {
    return fromNullable(
      document.querySelector(`[data-canbetoc-toc-id="${id}"]`)
    )
  }

  getDataCanbetocTocActiveBranchFrom(element: Element): boolean {
    return pipe(
      fromNullable(element.getAttribute('data-canbetoc-toc-active-branch')),
      fold(
        () => false,
        (value) => {
          return value === 'true'
        }
      )
    )
  }

  getDataCanbetocTocActiveItemFrom(element: Element): boolean {
    return pipe(
      fromNullable(element.getAttribute('data-canbetoc-toc-active-item')),
      fold(
        () => false,
        (value) => {
          return value === 'true'
        }
      )
    )
  }

  getHierarchyLevelFrom(element: Element): Option<number> {
    const valueOrNull = element.getAttribute(
      'data-canbetoc-toc-hierarchy-level'
    )

    return pipe(
      fromNullable(valueOrNull),
      mapNullable((value) => {
        const number = Number(value)

        if (isNaN(number)) {
          return undefined
        }

        return number
      })
    )
  }

  getIdFrom(element: Element): Option<string> {
    const valueOrNull = element.getAttribute('id')

    return fromNullable(
      typeof valueOrNull === 'string'
        ? valueOrNull
        : element.getAttribute('data-canbetoc-toc-id')
    )
  }

  findTargetById(id: string): Option<HTMLElement> {
    return fromNullable(document.getElementById(id))
  }

  update(
    element: Element,
    data: { activeBranch?: boolean; activeItem?: boolean }
  ): void {
    if (Object.prototype.hasOwnProperty.call(data, 'activeItem')) {
      if (data.activeItem as boolean) {
        if (element.getAttribute('data-canbetoc-toc-active-item') !== 'true') {
          element.setAttribute('data-canbetoc-toc-active-item', 'true')
          element.setAttribute('aria-current', 'location')
        }
      } else {
        if (element.getAttribute('data-canbetoc-toc-active-item') !== 'false') {
          element.setAttribute('data-canbetoc-toc-active-item', 'false')
          element.removeAttribute('aria-current')
        }
      }
    }

    if (Object.prototype.hasOwnProperty.call(data, 'activeBranch')) {
      if (data.activeBranch as boolean) {
        if (
          element.getAttribute('data-canbetoc-toc-active-branch') !== 'true'
        ) {
          element.setAttribute('data-canbetoc-toc-active-branch', 'true')
        }
      } else {
        if (
          element.getAttribute('data-canbetoc-toc-active-branch') !== 'false'
        ) {
          element.setAttribute('data-canbetoc-toc-active-branch', 'false')
        }
      }
    }

    if (Object.prototype.hasOwnProperty.call(data, 'latestIntersected')) {
      if (data.activeBranch as boolean) {
        if (
          element.getAttribute('data-canbetoc-toc-latest-intersected') !==
          'true'
        ) {
          element.setAttribute('data-canbetoc-toc-latest-intersected', 'true')
        }
      } else {
        if (
          element.getAttribute('data-canbetoc-toc-latest-intersected') !==
          'false'
        ) {
          element.setAttribute('data-canbetoc-toc-latest-intersected', 'false')
        }
      }
    }
  }
}
