import { Option } from 'fp-ts/lib/Option'
export interface TraitTocListDomAdaptor {
  findById: (id: string | number) => Option<Element>
  /**
   * @param element - The list eleemnt
   * @param ids - Some item id under The list
   */
  updateDisplayedItemIds: (element: Element, ids: string[]) => void
  /**
   * @param element - The list eleemnt
   * @param id - The list id or index
   */
  updateId: (element: Element, id: string | number) => void
}
