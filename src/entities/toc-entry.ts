import { flatten } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import { chain, map, Option } from 'fp-ts/lib/Option'
import { TraitTocEntryDomAdaptor } from './toc-entry-dom-adaptor'

export interface TraitTocEntry {
  addItems: (items: TocEntry[]) => void
  getElement: () => Option<Element>
  getId: () => Option<string>
  getItems: () => TocEntry[]
  getTarget: () => Option<Element>
  setDisplayed: (displayed: boolean) => void
}

export class TocEntry implements TraitTocEntry {
  #items: TocEntry[][] = []

  constructor(
    private readonly domAdaptor: TraitTocEntryDomAdaptor,
    private readonly id: Option<string>
  ) {}

  addItems(items: TocEntry[]): void {
    this.#items.push(items)
  }

  getElement(): Option<HTMLElement> {
    return pipe(
      this.id,
      chain((id) => {
        return this.domAdaptor.findElementById(id)
      })
    )
  }

  getId(): Option<string> {
    return this.id
  }

  getItems(): TocEntry[] {
    return flatten(this.#items)
  }

  getTarget(): Option<HTMLElement> {
    return pipe(
      this.id,
      chain((id) => {
        return this.domAdaptor.findTargetById(id)
      })
    )
  }

  setDisplayed(displayed: boolean): void {
    pipe(
      this.getElement(),
      map((element) => {
        this.domAdaptor.update(element, { displayed })
      })
    )
  }
}
