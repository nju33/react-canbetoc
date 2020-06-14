import { StackNode, TraitStackNode } from '../models/stack-node'
import { TraitStackNodeFactory } from '../models/stack-node-factory'

export interface TraitStackNodeService {
  create: (element: Element, selectorPriority: number) => TraitStackNode
  genTemporary: (
    length: number,
    initialNode?: TraitStackNode | undefined
  ) => TraitStackNode[]
}

export class StackNodeService implements TraitStackNodeService {
  constructor(private readonly factory: TraitStackNodeFactory) {}

  genTemporary(
    length: number,
    initialNodeParent: TraitStackNode | undefined = undefined
  ): TraitStackNode[] {
    const array: TraitStackNode[] = [...Array(length)]

    return array.reduce<TraitStackNode[]>((parents, _, i) => {
      const node = this.factory.create(i)
      const parentIndex = i - 1
      let parent = (parents[parentIndex] as unknown) as
        | TraitStackNode
        | undefined
      if (typeof parent === 'undefined') {
        parent = initialNodeParent
      }

      if (parent !== undefined) {
        if (parent.isTemporary()) {
          parent.addChildren(node)
        }
        node.setParent(parent)
      }

      return [...parents, node]
    }, [])
  }

  create(element: Element, selectorPriority: number): TraitStackNode {
    return new StackNode(element, selectorPriority)
  }
}
