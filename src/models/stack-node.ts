// FIXME
export interface TraitStackNode {
  addChildren: (node: TraitStackNode | TraitStackNode[]) => this
  getChildren: () => TraitStackNode[]
  getClickHandler: () => () => void | PromiseLike<void>
  getElement: () => Element | undefined
  getElementId: () => string | undefined
  getParent: () => TraitStackNode | undefined
  getSelectorPriority: () => number
  getText: () => string
  inherit: (node: TraitStackNode) => this
  isTemporary: () => boolean
  setParent: (node: TraitStackNode | undefined) => this
}

export class TemporaryStackNode implements TraitStackNode {
  #parent: TraitStackNode | undefined
  #children: TraitStackNode[] = []

  constructor(protected selectorPriority: number) {}

  isTemporary(): boolean {
    return true
  }

  getText(): string {
    return ''
  }

  getSelectorPriority(): number {
    return this.selectorPriority
  }

  setParent(node: TraitStackNode | undefined): this {
    this.#parent = node
    return this
  }

  getParent(): TraitStackNode | undefined {
    return this.#parent
  }

  addChildren(node: TraitStackNode | TraitStackNode[]): this {
    if (Array.isArray(node)) {
      this.#children.push(...node)
    } else {
      this.#children.push(node)
    }

    return this
  }

  getChildren(): TraitStackNode[] {
    return this.#children.filter((child) => !child.isTemporary())
  }

  inherit(node: TraitStackNode): this {
    this.setParent(node.getParent()).addChildren(node.getChildren())

    return this
  }

  getClickHandler(): () => void {
    return () => {}
  }

  getElementId(): string | undefined {
    return undefined
  }

  getElement(): Element | undefined {
    return undefined
  }
}

export class StackNode extends TemporaryStackNode implements TraitStackNode {
  constructor(private readonly element: Element, selectorPriority: number) {
    super(selectorPriority)
  }

  isTemporary(): boolean {
    return false
  }

  getText(): string {
    return typeof this.element.textContent === 'string'
      ? this.element.textContent
      : ''
  }

  getClickHandler(): () => void {
    return () => {
      console.log('foo')
    }
  }

  getElementId(): string {
    return this.element.id
  }

  getElement(): Element {
    return this.element
  }
}
