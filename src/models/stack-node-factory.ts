import { StackNode, TemporaryStackNode, TraitStackNode } from './stack-node'

export interface TraitStackNodeFactory {
  get: ((element: Element, selectorPriority: number) => TraitStackNode) &
    ((selectorPriority: number) => TraitStackNode)
}

export class StackNodeFactory implements TraitStackNodeFactory {
  get(...args: unknown[]): TraitStackNode {
    if (args.length === 2) {
      const element = args[0] as Element
      const selectorPriority = args[1] as number

      return new StackNode(element, selectorPriority)
    } else {
      const selectorPriority = args[0] as number

      return new TemporaryStackNode(selectorPriority)
    }
  }
}
