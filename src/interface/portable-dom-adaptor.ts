import { fromNullable, Option } from 'fp-ts/lib/Option'

export interface TraitPortableDomAdaptor {
  findById: (id: string) => Option<Element>
}

export class PortableDomAdaptor implements TraitPortableDomAdaptor {
  findById(id: string): Option<Element> {
    return fromNullable(document.querySelector(`[data-canbetoc-id="${id}"]`))
  }
}
