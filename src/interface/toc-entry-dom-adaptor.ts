import { fromNullable, Option } from 'fp-ts/lib/Option'
import { TraitTocEntryDomAdaptor } from '../entities/toc-entry-dom-adaptor'

export class TocEntryDomAdaptor implements TraitTocEntryDomAdaptor {
  findElementById(id: string): Option<HTMLElement> {
    return fromNullable(
      document.querySelector(`[data-canbetoc-toc-id="${id}"]`)
    )
  }

  findTargetById(id: string): Option<HTMLElement> {
    return fromNullable(document.getElementById(id))
  }

  update(element: Element, data: { displayed: boolean }): void {
    if (data.displayed) {
      element.setAttribute('data-canbetoc-toc-displayed', 'true')
    } else {
      element.setAttribute('data-canbetoc-toc-displayed', 'false')
    }
  }
}
