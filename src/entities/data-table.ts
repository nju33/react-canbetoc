export interface TraitHtmlSelector {
  toAttribute: () => TraitHtmlAttribute
  toString: () => string
}

export class HtmlSelector implements TraitHtmlSelector {
  #table: string
  #namespace: string
  #column: string
  #value: string | undefined

  constructor(
    table: string,
    namespace: string,
    column: string,
    value?: string
  ) {
    this.#table = table
    this.#namespace = namespace
    this.#column = column
    this.#value = value
  }

  toString(): string {
    if (typeof this.#value === 'string') {
      return `[data-${this.#table}-${this.#namespace}-${this.#column}="${
        this.#value
      }"]`
    }

    return `[data-${this.#table}-${this.#namespace}-${this.#column}]`
  }

  toAttribute(): TraitHtmlAttribute {
    return new HtmlAttribute(this.#table, this.#namespace, this.#column)
  }
}

export interface TraitHtmlAttribute {
  toSelector: (value?: string) => TraitHtmlSelector
  toString: () => string
}

export class HtmlAttribute implements TraitHtmlAttribute {
  #table: string
  #namespace: string
  #column: string

  constructor(table: string, namespace: string, column: string) {
    this.#table = table
    this.#namespace = namespace
    this.#column = column
  }

  toString(): string {
    return `data-${this.#table}-${this.#namespace}-${this.#column}`
  }

  toSelector(value?: string): TraitHtmlSelector {
    return new HtmlSelector(this.#table, this.#namespace, this.#column, value)
  }
}

export interface TraitDataTable {
  getAttribute: (column: string) => TraitHtmlAttribute
  getSelector: (column: string, value?: string) => TraitHtmlSelector
}

export class DataTable implements TraitDataTable {
  constructor(
    private readonly table: string,
    private readonly namespace: string
  ) {}

  getAttribute(column: string): TraitHtmlAttribute {
    return new HtmlAttribute(this.table, this.namespace, column)
  }

  getSelector(column: string, value?: string): TraitHtmlSelector {
    return new HtmlSelector(this.table, this.namespace, column, value)
  }
}

export const tocListDataTable = new DataTable('canbetoc', 'tocList')

export const tocItemDataTable = new DataTable('canbetoc', 'tocItem')
