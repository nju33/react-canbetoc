export type CanbetocBooleanAttribute = Record<
  'data-canbetoc-on-viewport',
  boolean
>

export type CanbetocStringAttribute = Record<
  'data-canbetoc-id' | 'data-canbetoc-for',
  string
>

export interface TraitCanbetocElement {
  disableAttribute: (attribute: keyof CanbetocBooleanAttribute) => void
  enableAttribute: (attribute: keyof CanbetocBooleanAttribute) => void
}

export class ConvetocElement implements TraitCanbetocElement {
  #attribute: CanbetocBooleanAttribute & CanbetocStringAttribute

  constructor(private readonly element: Element) {
    const id = element.getAttribute('data-canbetoc-id')
    const htmlFor = element.getAttribute('data-canbetoc-for')

    if (id === null) {
      throw new Error('The [data-canbetoc-id] attribute is null')
    }

    if (htmlFor === null) {
      throw new Error('The [data-canbetoc-id] attribute is null')
    }

    this.#attribute = {
      'data-canbetoc-on-viewport': element.hasAttribute(
        'data-canbetoc-on-viewport'
      ),
      'data-canbetoc-id': id,
      'data-canbetoc-for': htmlFor
    }
  }

  disableAttribute(attribute: keyof CanbetocBooleanAttribute): void {
    this.#attribute[attribute] = false
  }

  enableAttribute(attribute: keyof CanbetocBooleanAttribute): void {
    this.#attribute[attribute] = true
  }
}
