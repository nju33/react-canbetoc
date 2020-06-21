import { Option } from 'fp-ts/lib/Option'

export interface TraitTocItemDomAdaptor {
  /**
   * @param element - The top-level element on the tree
   */
  findById: (element: Element, id: Option<string>) => Option<Element>
  newElement: () => HTMLElement
}
