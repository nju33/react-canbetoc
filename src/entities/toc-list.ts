import { flatten } from 'fp-ts/lib/Array'
import { Option } from 'fp-ts/lib/Option'
import { TraitTocItem } from './toc-item'
import { TraitTocListDomAdaptor } from './toc-list-dom-adaptor'

export interface TraitTocList {
  addItems: (items: TraitTocItem[]) => void
  getElement: () => Option<Element>
  getItems: () => TraitTocItem[]
}

export class TocList implements TraitTocList {
  #items: TraitTocItem[][] = []

  constructor(
    private readonly domAdaptor: TraitTocListDomAdaptor,
    private readonly id: string
  ) {}

  addItems(items: TraitTocItem[]): void {
    this.#items.push(items)
  }

  getElement(): Option<Element> {
    return this.domAdaptor.findById(this.id)
  }

  getItems(): TraitTocItem[] {
    return flatten(this.#items)
  }
}
