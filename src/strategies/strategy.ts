import { TraitTocEntry } from '../entities'

export interface TraitStrategy {
  handle: (tocEntries: TraitTocEntry[]) => PromiseLike<void>
}
