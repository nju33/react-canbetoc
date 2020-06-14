// FIXME
export class CanbetocEmitter {
  #id: string
  #target: Element

  constructor(id: string, target: Element) {
    this.#id = id
    this.#target = target
  }

  get element(): Element {
    return this.#target
  }

  get tocAnchorElement(): Element | null {
    const query = `[data-canbetoc-id="${this.#id}"] [data-canbetoc-for="${
      this.#target.id
    }"]`
    const element = document.querySelector(query)

    if (element === null) {
      console.warn(`There are no elements. query: ${query}`)
    }

    return element
  }
}
