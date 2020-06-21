export type CanbetocAttributes = 'data-canbetoc-on-viewport'

export interface TraitDomDao {
  get: (options: { attribute: CanbetocAttributes }) => Element[]
  // TODO
  // update: ()
}
