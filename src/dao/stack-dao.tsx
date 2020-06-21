import { TraitStackDao } from '../models/stack-dao'
import { TraitStackNode } from '../models/stack-node'

export class StackDao implements TraitStackDao {
  constructor(
    private readonly id: string,
    private readonly elements: Element[],
    private readonly map: Map<Element, TraitStackNode>
  ) {}

  getEntires(): Array<[Element, Element]> {
    return this.elements.reduce<Array<[Element, Element]>>(
      (result, element: Element) => {
        const anchor = document.querySelector(
          `[data-canbetoc-id="${this.id}"] [data-canbetoc-for="${element.id}"]`
        )

        console.log(this.map.entries())

        if (anchor === null) {
          return result
        }

        return [...result, [element, anchor]]
      },
      []
    )
  }

  getAncestors(): Array<[Array<[Element, Eleemnt]>]> {
    console.log('foo')
  }
}
