import { pipe } from 'fp-ts/lib/function'
import { map, Option, some } from 'fp-ts/lib/Option'
import { TocEntry, TraitTocEntry } from './toc-entry'
import { TocEntryDao, TraitTocEntryDao } from './toc-entry-dao'
import { TraitTocEntryDomAdaptor } from './toc-entry-dom-adaptor'
import { TraitTocListItemAdaptor } from './toc-list-item-adaptor'

export interface TraitTocEntryService {
  convertToDaoFrom: (tocEntry: TraitTocEntry) => TraitTocEntryDao
  /**
   * TocEntry を作成か、既存の物を取得
   */
  getInstance: (id: Option<string>) => Option<TraitTocEntry>
}

export class TocEntryService implements TraitTocEntryService {
  #tocEntryMap = new Map<string, TraitTocEntry>()
  #daoMap = new WeakMap<TraitTocEntry, TraitTocEntryDao>()

  constructor(
    private readonly domAdaptor: TraitTocEntryDomAdaptor,
    private readonly tocListItemAdaptor: TraitTocListItemAdaptor
  ) {}

  getInstance(optionId: Option<string>): Option<TraitTocEntry> {
    return pipe(
      optionId,
      map((id) => {
        if (!this.#tocEntryMap.has(id)) {
          this.#tocEntryMap.set(
            id,
            new TocEntry(this.domAdaptor, this.tocListItemAdaptor, some(id))
          )
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const tocEntry = this.#tocEntryMap.get(id)!
        tocEntry.removeItems()

        return tocEntry
      })
    )
  }

  convertToDaoFrom(tocEntry: TraitTocEntry): TraitTocEntryDao {
    if (!this.#daoMap.has(tocEntry)) {
      this.#daoMap.set(tocEntry, new TocEntryDao(this, tocEntry))
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dao = this.#daoMap.get(tocEntry)!

    return dao
  }
}
