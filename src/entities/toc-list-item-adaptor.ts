import { Option } from 'fp-ts/lib/Option'

export interface TraitTocListItemAdaptor {
  getActiveBranch: (element: Option<HTMLElement>) => boolean
  getActiveItem: (element: Option<HTMLElement>) => boolean
  getAnchorHeight: (element: Option<HTMLElement>) => Option<number>
  getHeight: (
    element: Option<HTMLElement>,
    option: { anchor: boolean }
  ) => Option<number>
  getHeightFull: (element: Option<HTMLElement>) => Option<number>
  getHierarchyLevel: (element: Option<HTMLElement>) => Option<number>
  getId: (element: Option<HTMLElement>) => Option<string>
  getLatestIntersected: (element: Option<HTMLElement>) => boolean
}
