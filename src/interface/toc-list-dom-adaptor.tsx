import { fromNullable, Option } from 'fp-ts/lib/Option'
import { TraitTocListDomAdaptor } from '../entities/toc-list-dom-adaptor'

export class TocListDomAdaptor implements TraitTocListDomAdaptor {
  findById(id: string | number): Option<Element> {
    return fromNullable(
      document.querySelector(`[data-canbetoc-toc-list-id="${id}"]`)
    )
  }

  updateDisplayedItemIds(element: Element, ids: string[]): void {
    return element.setAttribute(
      'data-canbetoc-toc-displayed-item-ids',
      ids.join(' ')
    )
  }

  updateId(element: Element, id: string | number): void {
    return element.setAttribute('data-canbetoc-toc-list-id', id.toString())
  }
}
