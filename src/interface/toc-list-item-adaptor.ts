import { pipe } from 'fp-ts/lib/function'
import {
  chain,
  fold as optionFold,
  fromNullable,
  getOrElse,
  isSome,
  map,
  mapNullable,
  none,
  Option,
  some
} from 'fp-ts/lib/Option'
import { reduce } from 'fp-ts/lib/ReadonlyArray'
import { fold, fromOptions } from 'fp-ts/lib/These'
import { TraitTocListItemAdaptor } from '../entities/toc-list-item-adaptor'

export function getAttrName(suffix: string): string {
  return `data-canbetoc-toc-${suffix}`
}

export class TocListItemAdaptor implements TraitTocListItemAdaptor {
  mapStringToNullableNumber: (
    optionString: Option<string>
  ) => Option<number> = mapNullable((value) => {
    const number = Number(value)
    if (isNaN(number)) {
      return null
    }

    return number
  })

  getDataInBoolean(
    optionElement: Option<HTMLElement>,
    attrName: string
  ): boolean {
    return isSome(
      pipe(
        optionElement,
        chain((element) => {
          return pipe(
            fromNullable(element.getAttribute(attrName)),
            chain((value) => {
              if (value === 'true') {
                return some(undefined)
              }

              return none
            })
          )
        })
      )
    )
  }

  getDataInNumber(
    optionElement: Option<HTMLElement>,
    attrName: string
  ): Option<number> {
    return pipe(
      optionElement,
      chain((element) => {
        return pipe(
          fromNullable(element.getAttribute(attrName)),
          this.mapStringToNullableNumber
        )
      })
    )
  }

  getData(
    optionElement: Option<HTMLElement>,
    attrName: string
  ): Option<string> {
    return pipe(
      optionElement,
      mapNullable((element) => {
        return element.getAttribute(attrName)
      })
    )
  }

  getActiveBranch(element: Option<HTMLElement>): boolean {
    return this.getDataInBoolean(element, getAttrName('active-branch'))
  }

  getActiveItem(element: Option<HTMLElement>): boolean {
    return this.getDataInBoolean(element, getAttrName('active-item'))
  }

  getAnchorHeight(element: Option<HTMLElement>): Option<number> {
    return this.getDataInNumber(element, getAttrName('anchor-height'))
  }

  private readonly calcHeight = reduce(0, (acc, element: Element) => {
    acc += element.clientHeight

    return acc
  })

  getHeight(
    optionElement: Option<HTMLElement>,
    { anchor }: { anchor: boolean }
  ): Option<number> {
    const optionThese = fromOptions(
      optionElement,
      this.getAnchorHeight(optionElement)
    )

    const onLeft = (): never => {
      throw new Error('element is not found')
    }

    const onRight = (): never => {
      throw new Error('data anchor height is not found')
    }

    const onBoth = (element: HTMLElement, anchorHeight: number): number => {
      return pipe(
        this.getHierarchyLevel(optionElement),
        map((hierarchyLevel) => {
          let selector = `[data-canbetoc-toc-hierarchy-level="${
            hierarchyLevel + 1
          }"]`
          if (anchor) {
            selector += ' > a'
          }

          const elements: readonly Element[] = Array.from(
            element.querySelectorAll(selector)
          )

          const result = this.calcHeight(elements) + anchorHeight

          return result
        }),
        getOrElse(() => anchorHeight)
      )
    }

    return pipe(
      optionThese,
      map((these) => {
        return pipe(these, fold(onLeft, onRight, onBoth))
      })
    )
  }

  getHeightFull(optionElement: Option<HTMLElement>): Option<number> {
    const optionThese = fromOptions(
      optionElement,
      this.getAnchorHeight(optionElement)
    )

    const onLeft = (): never => {
      throw new Error('element is not found')
    }

    const onRight = (): never => {
      throw new Error('data anchor height is not found')
    }

    const onBoth = (element: HTMLElement, _anchorHeight: number): number => {
      const anchors: readonly Element[] = Array.from(
        element.querySelectorAll('[data-canbetoc-toc-id] > a')
      )

      const result = this.calcHeight(anchors)

      return result
    }

    return pipe(
      optionThese,
      map((these) => {
        return pipe(these, fold(onLeft, onRight, onBoth))
      })
    )
  }

  getHierarchyLevel(element: Option<HTMLElement>): Option<number> {
    return this.getDataInNumber(element, getAttrName('hierarchy-level'))
  }

  getId(optionElement: Option<HTMLElement>): Option<string> {
    return pipe(
      optionElement,
      optionFold(
        () => none,
        (element) => fromNullable(element.getAttribute('id'))
      )
    )
  }

  getLatestIntersected(element: Option<HTMLElement>): boolean {
    return this.getDataInBoolean(element, getAttrName('latest-intersected'))
  }
}
