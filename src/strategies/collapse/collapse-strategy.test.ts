/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { getApplySemigroup, Option, some } from 'fp-ts/lib/Option'
import { semigroupSum } from 'fp-ts/lib/Semigroup'
import { TraitTocEntry } from '../../entities/toc-entry'
import { TraitStrategy } from '../storategy'
import { CollapseStrategy } from './collapse-strategy'

class MockActiveTocEntry implements TraitTocEntry {
  constructor(
    public readonly data: {
      activeBranch: boolean
      activeItem: boolean
      anchorHeight: number
      element: HTMLElement
      elementHeight?: number
      hierarchyLevel: number
      items: TraitTocEntry[]
      latestIntersected: boolean
    }
  ) {}

  activate(isCurrent?: boolean): void {
    throw new Error('do not used')
  }

  addItems(items: TraitTocEntry[]): void {
    throw new Error('do not used')
  }

  getElement(): Option<HTMLElement> {
    return some(this.data.element)
  }

  getElementDataActiveBranch(): boolean {
    return this.data.activeBranch
  }

  getElementDataActiveItem(): boolean {
    return this.data.activeItem
  }

  getElementDataAnchorHeight(): Option<number> {
    return some(this.data.anchorHeight)
  }

  getElementDataHierarcyLevel(): Option<number> {
    return some(this.data.hierarchyLevel)
  }

  getElementDataId(): Option<string> {
    throw new Error('do not used')
  }

  getElementDataLatestIntersected(): boolean {
    return this.data.latestIntersected
  }

  getElementHeight(options: { anchor?: boolean }): Option<number> {
    if (this.data.elementHeight !== undefined) {
      return some(this.data.elementHeight)
    }

    const S = getApplySemigroup(semigroupSum)

    const sumChildrenHeight = this.getItems()
      .map((item) => {
        return item.getElementDataAnchorHeight()
      })
      .reduce((result, child) => {
        result = S.concat(result, child)

        return result
      }, some(0))

    return S.concat(this.getElementDataAnchorHeight(), sumChildrenHeight)
  }

  getItems(): TraitTocEntry[] {
    return this.data.items
  }

  getParentItems(): TraitTocEntry[] {
    return [] as TraitTocEntry[]
  }

  getSiblingItems(): TraitTocEntry[] {
    return [] as TraitTocEntry[]
  }

  getTarget(): Option<Element> {
    throw new Error('do not used')
  }

  inactivate(isCurrent?: boolean): void {
    throw new Error('do not used')
  }

  removeItems(): void {
    throw new Error('do not used')
  }

  setParentItems(items: TraitTocEntry[]): void {
    throw new Error('do not used')
  }

  setSiblingItems(items: TraitTocEntry[]): void {
    throw new Error('do not used')
  }
}

describe('CollapseStrategy', () => {
  let collapseStrategy: TraitStrategy

  beforeEach(() => {
    jest.useFakeTimers()
    collapseStrategy = new CollapseStrategy()
  })

  test('handle', async () => {
    const activeItemHeight = 50
    const activeItemParentHeight = 40

    const li3 = document.createElement('li')
    const tocEntry3 = new MockActiveTocEntry({
      element: li3,
      activeBranch: true,
      activeItem: true,
      anchorHeight: activeItemHeight,
      elementHeight: 0,
      hierarchyLevel: 3,
      latestIntersected: true,
      items: [] as TraitTocEntry[]
    })

    const li2 = document.createElement('li')
    const tocEntry2 = new MockActiveTocEntry({
      element: li2,
      activeBranch: true,
      activeItem: false,
      anchorHeight: activeItemParentHeight,
      hierarchyLevel: 2,
      latestIntersected: true,
      items: [tocEntry3]
    })

    const li1 = document.createElement('li')
    const tocEntry1 = new MockActiveTocEntry({
      element: li1,
      activeBranch: true,
      activeItem: false,
      anchorHeight: 40,
      hierarchyLevel: 1,
      latestIntersected: true,
      items: [tocEntry2]
    })

    await collapseStrategy.handle([tocEntry3, tocEntry2, tocEntry1])
    jest.advanceTimersByTime(250)

    expect(li1).toHaveStyle('height: auto')
    expect(li2).toHaveStyle(
      `height: ${activeItemParentHeight + activeItemHeight}px`
    )
    expect(li3).toHaveStyle(`height: ${activeItemHeight}px`)
  })
})
