// FIXME
export class CanbetocEmitter {
  #id: string
  #emitters: CanbetocEmitter[]
  #targetIndex: number

  constructor(id: string, emitters: CanbetocEmitter[], targetIndex: number) {
    this.#id = id
    this.#emitters = emitters
    this.#targetIndex = targetIndex
  }

  get element(): Element {
    return this.#emitters[this.#targetIndex].element
  }

  // get parent(): CanbetocEmitter | undefined {
  //   const before = this.#emitters.slice(0, this.#targetIndex)
  // }

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
