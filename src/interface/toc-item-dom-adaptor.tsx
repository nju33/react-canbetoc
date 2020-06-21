import { pipe } from 'fp-ts/lib/function'
import { mapNullable, Option } from 'fp-ts/lib/Option'
import { TraitTocItemDomAdaptor } from '../entities/toc-item-dom-adaptor'

export class TocItemDomAdaptor implements TraitTocItemDomAdaptor {
  findById(element: Element, optionId: Option<string>): Option<Element> {
    return pipe(
      optionId,
      mapNullable((id) => {
        return element.querySelector(`[data-canbetoc-toc-id="${id}"]`)
      })
    )
  }

  newElement(): HTMLElement {
    return document.createElement('li')
  }
}
