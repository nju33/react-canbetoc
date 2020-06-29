import { Option } from 'fp-ts/lib/Option'

export interface TocEntryAttributeTypes {
  activeBranch: boolean
  activeItem: boolean
  latestIntersected: boolean
}

export interface TraitTocEntryDomAdaptor {
  findElementById: (id: string) => Option<HTMLElement>

  findTargetById: (id: string) => Option<HTMLElement>

  getDataCanbetocTocActiveBranchFrom: (element: Element) => boolean

  getDataCanbetocTocActiveItemFrom: (element: Element) => boolean

  getHierarchyLevelFrom: (element: Element) => Option<number>

  getIdFrom: (element: Element) => Option<string>

  update: (element: Element, data: Partial<TocEntryAttributeTypes>) => void
}
