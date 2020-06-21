import { last } from 'fp-ts/lib/Array'
import { flow, pipe } from 'fp-ts/lib/function'
import { fromNullable, map, none } from 'fp-ts/lib/Option'
import { TraitTocBuilderCommand } from './toc-builder-command'
import { TocEntry, TraitTocEntry } from './toc-entry'
import { TraitTocEntryDomAdaptor } from './toc-entry-dom-adaptor'

export interface TraitTocBuilder {
  /**
   * 現在の階層の子要素として`elements`を配置
   */
  addElements: (elements: Element[]) => void
  build: (commands: TraitTocBuilderCommand[]) => void
  get: () => TraitTocEntry
  getList: () => TraitTocEntry[]
  /**
   * 階層移動
   *
   * @param number - 階層のインデックス値
   */
  setHierarchy: (number: number) => void
}

export type Flowable<F extends Function> = [F, F, F, F, F, F, F, F, F]
export type CommandFlow = Flowable<TraitTocBuilderCommand['execute']>

export class TocBuilder implements TraitTocBuilder {
  #root: TraitTocEntry
  #stack: TraitTocEntry[]
  #list: TraitTocEntry[]
  #hierarchyIndex: number = 0

  constructor(private readonly domAdaptor: TraitTocEntryDomAdaptor) {
    this.#root = new TocEntry(domAdaptor, none)
    this.#stack = [this.#root]
    this.#list = []
  }

  addElements(elements: Element[]): void {
    const optionNode = fromNullable(this.#stack[this.#hierarchyIndex])

    pipe(
      optionNode,
      map((node) => {
        const items = elements.map(
          (element) => new TocEntry(this.domAdaptor, fromNullable(element.id))
        )

        this.#list.push(...items)
        node.addItems(items)

        pipe(
          last(items),
          map((lastItem) => {
            this.#stack[this.#hierarchyIndex + 1] = lastItem
            // remove deep placed items  than the above
            this.#stack.length = this.#hierarchyIndex + 2
          })
        )
      })
    )
  }

  setHierarchy(number: number): void {
    this.#hierarchyIndex = number
  }

  build(commands: TraitTocBuilderCommand[]): void {
    const executes = commands.map((command) => command.execute) as CommandFlow

    flow(...executes)(this)
  }

  get(): TraitTocEntry {
    return this.#root
  }

  getList(): TraitTocEntry[] {
    return this.#list
  }
}
