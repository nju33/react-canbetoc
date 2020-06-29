import { sequenceT } from 'fp-ts/lib/Apply'
import { last } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import { fromNullable, isSome, map, none, option } from 'fp-ts/lib/Option'
import { TraitTocBuilderCommand } from './toc-builder-command'
import { TocEntry, TraitTocEntry } from './toc-entry'
import { TraitTocEntryDomAdaptor } from './toc-entry-dom-adaptor'
import { TraitTocEntryService } from './toc-entry-service'
import { TraitTocListItemAdaptor } from './toc-list-item-adaptor'

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

export class TocBuilder implements TraitTocBuilder {
  #root: TraitTocEntry
  #stack: TraitTocEntry[]
  #list: TraitTocEntry[]
  #hierarchyIndex: number = 0

  constructor(
    readonly domAdaptor: TraitTocEntryDomAdaptor,
    readonly tocListItemAdaptor: TraitTocListItemAdaptor,
    private readonly service: TraitTocEntryService
  ) {
    this.#root = new TocEntry(domAdaptor, tocListItemAdaptor, none)
    this.#stack = [this.#root]
    this.#list = []
  }

  addElements(elements: Element[]): void {
    const optionEntry = fromNullable(this.#stack[this.#hierarchyIndex])

    pipe(
      optionEntry,
      map((entry) => {
        const hierarchyLevel = this.#hierarchyIndex + 1
        const parentItems = this.#stack.slice(0, hierarchyLevel)

        const items = elements
          .map((element) => {
            return pipe(
              this.service.getInstance(fromNullable(element.id)),
              map((newEntry) => {
                newEntry.setParentItems(parentItems)

                return newEntry
              })
            )
          })
          .filter(isSome)
          .map((someTocEntry) => {
            const currentHash = location.hash.slice(1)

            const tocEntry = someTocEntry.value
            pipe(
              sequenceT(option)(
                tocEntry.getElementDataId(),
                tocEntry.getTarget()
              ),
              map(([id, element]) => {
                if (id === currentHash) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              })
            )

            return someTocEntry.value
          })

        items.forEach((currentItem) => {
          currentItem.setSiblingItems(
            [...items].filter((item) => item !== currentItem)
          )
        })

        this.#list.push(...items)
        entry.addItems(items)

        pipe(
          last(items),
          map((lastItem) => {
            this.#stack[hierarchyLevel] = lastItem
            // remove deep placed items  than the above
            this.#stack.length = hierarchyLevel + 1
          })
        )
      })
    )
  }

  setHierarchy(number: number): void {
    this.#hierarchyIndex = number
  }

  build(commands: TraitTocBuilderCommand[]): void {
    const executes = commands.map((command) => command.execute)

    executes.forEach((exec) => {
      exec(this)
    })
  }

  get(): TraitTocEntry {
    return this.#root
  }

  getList(): TraitTocEntry[] {
    return this.#list
  }
}
