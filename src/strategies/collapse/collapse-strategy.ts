import { sequenceT } from 'fp-ts/lib/Apply'
import { flow, pipe } from 'fp-ts/lib/function'
import { IO } from 'fp-ts/lib/IO'
import { groupBy } from 'fp-ts/lib/NonEmptyArray'
import {
  fold,
  fromNullable,
  getFirstMonoid,
  map,
  mapNullable,
  none,
  Option,
  option,
  Some
} from 'fp-ts/lib/Option'
import { delay, Task } from 'fp-ts/lib/Task'
import { debounce } from 'throttle-debounce'
import { TraitTocEntry } from '../../entities'
import { TraitStrategy } from '../strategy'

export class CollapseStrategy implements TraitStrategy {
  private readonly groupByHierarchyLevel = groupBy((tocEntry: TraitTocEntry) =>
    String((tocEntry.getElementDataHierarcyLevel() as Some<number>).value)
  )

  private readonly delay50 = delay(50)

  private readonly getGroupedListByDesc = (
    tocEntries: TraitTocEntry[]
  ): readonly TraitTocEntry[][] => {
    return Object.values(this.groupByHierarchyLevel(tocEntries)).reverse()
  }

  private isAuto(value: string): boolean {
    return value === 'auto'
  }

  private isDirectlyBelowTheActiveItem(
    entry: TraitTocEntry,
    activeItemHierarchyLevel: number
  ): boolean {
    return pipe(
      entry.getElementDataHierarcyLevel(),
      fold(
        () => false,
        (hierarchyLevel) => {
          return (
            entry.getElementDataActiveBranch() &&
            activeItemHierarchyLevel - hierarchyLevel > 1
          )
        }
      )
    )
  }

  private setElementHeightToTheAnchorHeight(entry: TraitTocEntry): void {
    pipe(
      sequenceT(option)(entry.getElement(), entry.getElementDataAnchorHeight()),
      map(([element, height]) => {
        element.style.height = `${height}px`
      })
    )
  }

  private setElementHeightToAuto(entry: TraitTocEntry): void {
    pipe(
      entry.getElement(),
      map((element) => {
        element.style.height = 'auto'
      })
    )
  }

  private setElementHeightToCurrentHeight(entry: TraitTocEntry): void {
    pipe(
      sequenceT(option)(
        entry.getElement(),
        entry.getElementHeight({ anchor: true })
      ),
      map(([element, height]) => {
        element.style.height = `${height}px`
      })
    )
  }

  private setRealHeightAsData(element: Element, height: number): void {
    element.setAttribute('data-canbetoc-toc-real-height', String(height))
  }

  private getRealHeightAsData(element: Element): Option<number> {
    return pipe(
      fromNullable(element.getAttribute('data-canbetoc-toc-real-height')),
      mapNullable((value) => {
        const number = Number(value)

        if (isNaN(number)) {
          return
        }

        return number
      })
    )
  }

  private removeDataRealHeightFrom(element: Element): void {
    element.removeAttribute('data-canbetoc-toc-real-height')
  }

  private modifyStyle(tocEntries: TraitTocEntry[]): IO<void> {
    return (): void => {
      tocEntries.forEach((entry) => {
        pipe(
          entry.getElement(),
          map((htmlElement) => {
            htmlElement.style.transition = ''
          })
        )
      })
    }
  }

  private hardenWithAElementHeight(tocEntries: TraitTocEntry[]): IO<void> {
    return (): void => {
      tocEntries.forEach((tocEntry) => {
        pipe(
          tocEntry.getElement(),
          map((element) => {
            if (!this.isAuto(element.style.height)) {
              this.removeDataRealHeightFrom(element)
              return
            }

            const firstMonoid = getFirstMonoid<number>()
            const options: [Option<number>, Option<number>] = [
              tocEntry.getElementHeight({ anchor: false }),
              none
            ]
            if (!tocEntry.getElementDataActiveBranch()) {
              options[1] = firstMonoid.concat(
                this.getRealHeightAsData(element),
                tocEntry.getElementDataAnchorHeight()
              )
            }

            pipe(
              firstMonoid.concat(...options),
              map((height) => {
                element.style.height = `${height}px`
                this.setRealHeightAsData(element, height)
              })
            )
          })
        )
      })
    }
  }

  private readonly construct = (
    tocEntries: TraitTocEntry[]
  ): Task<void> => async () => {
    let activeLevelHierarchyLevel: number = 0

    const groups = this.getGroupedListByDesc(tocEntries)
    groups.forEach((group) => {
      group.forEach((tocEntry) => {
        const hierarchyLevel = (tocEntry.getElementDataHierarcyLevel() as Some<
          number
        >).value

        if (tocEntry.getElementDataActiveItem()) {
          activeLevelHierarchyLevel = hierarchyLevel
          ;[...tocEntry.getSiblingItems(), tocEntry].forEach((entry) => {
            this.setElementHeightToTheAnchorHeight(entry)
          })
        } else if (
          this.isDirectlyBelowTheActiveItem(tocEntry, activeLevelHierarchyLevel)
        ) {
          this.setElementHeightToAuto(tocEntry)
        } else if (tocEntry.getElementDataActiveBranch()) {
          this.setElementHeightToCurrentHeight(tocEntry)
        } else {
          this.setElementHeightToTheAnchorHeight(tocEntry)
        }
      })
    })
  }

  readonly handle = debounce(
    200,
    async (tocEntries: TraitTocEntry[]): Promise<void> => {
      flow(
        this.modifyStyle(tocEntries),
        this.hardenWithAElementHeight(tocEntries)
      )()

      await this.delay50(this.construct(tocEntries))()
    }
  )
}
