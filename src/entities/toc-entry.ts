import { flatten } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import { chain, map, Option } from 'fp-ts/lib/Option'
import { TraitTocEntryDomAdaptor } from './toc-entry-dom-adaptor'
import { TraitTocListItemAdaptor } from './toc-list-item-adaptor'

// TODO: 分割
export interface TraitTocEntry {
  /**
   * 親含めて活性化する
   */
  activate: (isCurrent?: boolean) => void
  /**
   * 直下 entry を追加
   */
  addItems: (items: TraitTocEntry[]) => void
  /**
   * 目次要素の取得
   */
  getElement: () => Option<HTMLElement>
  /**
   * 活性化した entry 自身かその親かどうか
   */
  getElementDataActiveBranch: () => boolean
  /**
   * 活性化した entry 自身かどうか
   */
  getElementDataActiveItem: () => boolean
  /**
   * 目次要素の高さを取得
   */
  getElementDataAnchorHeight: () => Option<number>
  /**
   * 階層のレベル
   */
  getElementDataHierarcyLevel: () => Option<number>
  /**
   * 目次要素の id
   */
  getElementDataId: () => Option<string>
  /**
   * 前回交差した entry かどうか
   */
  getElementDataLatestIntersected: () => boolean
  /**
   * 目次要素の子要素も含めた高さを取得
   */
  getElementHeight: (options: { anchor?: boolean }) => Option<number>
  /**
   * 直下階層の entry を取得
   */
  getItems: () => TraitTocEntry[]
  /**
   * 親階層の entry を取得
   */
  getParentItems: () => TraitTocEntry[]
  /**
   * 同階層の entry を取得
   */
  getSiblingItems: () => TraitTocEntry[]
  /**
   * 目次要素の元となる要素を取得
   */
  getTarget: () => Option<Element>
  /**
   * 親含めて非活性化する
   */
  inactivate: (isCurrent?: boolean) => void
  /**
   * 持っている entry を空にする
   */
  removeItems: () => void
  /**
   * 親階層の entry を格納
   */
  setParentItems: (items: TraitTocEntry[]) => void
  /**
   * 同階層の entry を格納
   */
  setSiblingItems: (items: TraitTocEntry[]) => void
}

export class TocEntry implements TraitTocEntry {
  #parentItems: TraitTocEntry[] = []
  #siblingItems: TraitTocEntry[] = []
  #items: TraitTocEntry[][] = []

  constructor(
    private readonly domAdaptor: TraitTocEntryDomAdaptor,
    private readonly tocListItemAdaptor: TraitTocListItemAdaptor,
    private readonly id: Option<string> // private readonly hierarchyLevel: number
  ) {}

  setParentItems(items: TraitTocEntry[]): void {
    this.#parentItems = items
  }

  getParentItems(): TraitTocEntry[] {
    return this.#parentItems
  }

  setSiblingItems(items: TraitTocEntry[]): void {
    this.#siblingItems = items
  }

  getSiblingItems(): TraitTocEntry[] {
    return this.#siblingItems
  }

  addItems(items: TraitTocEntry[]): void {
    this.#items.push(items)
  }

  removeItems(): void {
    this.#items = []
  }

  getElement(): Option<HTMLElement> {
    return pipe(
      this.id,
      chain((id) => {
        return this.domAdaptor.findElementById(id)
      })
    )
  }

  getElementHeight({ anchor = false }: { anchor?: boolean }): Option<number> {
    return this.tocListItemAdaptor.getHeight(this.getElement(), { anchor })
  }

  getElementDataId(): Option<string> {
    return this.tocListItemAdaptor.getId(this.getTarget())
  }

  getElementDataHierarcyLevel(): Option<number> {
    return this.tocListItemAdaptor.getHierarchyLevel(this.getElement())
  }

  getElementDataAnchorHeight(): Option<number> {
    return this.tocListItemAdaptor.getAnchorHeight(this.getElement())
  }

  getElementDataActiveBranch(): boolean {
    return this.tocListItemAdaptor.getActiveBranch(this.getElement())
  }

  getElementDataActiveItem(): boolean {
    return this.tocListItemAdaptor.getActiveItem(this.getElement())
  }

  getElementDataLatestIntersected(): boolean {
    return this.tocListItemAdaptor.getLatestIntersected(this.getElement())
  }

  getItems(): TraitTocEntry[] {
    return flatten(this.#items)
  }

  getTarget(): Option<HTMLElement> {
    return pipe(
      this.id,
      chain((id) => {
        return this.domAdaptor.findTargetById(id)
      })
    )
  }

  activate(isCurrent: boolean = true): void {
    pipe(
      this.getElement(),
      map((element) => {
        if (isCurrent) {
          this.domAdaptor.update(element, {
            activeItem: true,
            activeBranch: true,
            latestIntersected: true
          })

          const parents = this.getParentItems()
          parents.map((parentEntry) => {
            return parentEntry.activate(false)
          })
        } else {
          this.domAdaptor.update(element, { activeBranch: true })
        }
      })
    )
  }

  inactivate(isCurrent: boolean = true): void {
    pipe(
      this.getElement(),
      map((element) => {
        if (isCurrent) {
          this.domAdaptor.update(element, {
            activeItem: false,
            activeBranch: false,
            latestIntersected: false
          })

          const parents = this.getParentItems()
          parents.map((parentEntry) => {
            return parentEntry.inactivate(false)
          })
        } else {
          this.domAdaptor.update(element, { activeBranch: false })
        }
      })
    )
  }
}
