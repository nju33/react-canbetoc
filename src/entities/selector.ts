export interface TraitSelector {
  getLevel: () => number
  match: (element: Element) => boolean
  toString: () => string
}

export class Selector implements TraitSelector {
  constructor(private readonly value: string, private readonly level: number) {}

  getLevel(): number {
    return this.level
  }

  match(element: Element): boolean {
    return element.matches(this.value)
  }

  toString(): string {
    return this.value
  }
}
