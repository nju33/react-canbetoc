import { sequenceT } from 'fp-ts/lib/Apply'
import { flatten, reduce } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import { fromNullable, isSome, map, Option, option } from 'fp-ts/lib/Option'
import { RefObject, useEffect } from 'react'
import { TraitMutationObserverAdaptor } from '../entities/mutation-observer-adaptor'
import { TraitTocEntry } from '../entities/toc-entry'
import { TraitTocEntryService } from '../entities/toc-entry-service'
import { TraitStrategy } from '../strategies/strategy'
import { TraitEvent } from './event'

export type TraitObserveAttribute = TraitEvent<
  void,
  [string, RefObject<Element>, TraitStrategy, Option<TraitTocEntry[]>]
>

export const reduceToValidEntries = reduce<
  Option<TraitTocEntry>,
  TraitTocEntry[]
>([], (result, optionTocEntry) => {
  if (isSome(optionTocEntry)) {
    const tocEntry = optionTocEntry.value

    pipe(
      tocEntry.getElementDataHierarcyLevel(),
      map(() => {
        if (!result.includes(tocEntry)) {
          result.push(optionTocEntry.value)
        }
      })
    )
  }

  return result
})

export class ObserveAttribute implements TraitObserveAttribute {
  constructor(
    private readonly mutationObserverAdaptor: TraitMutationObserverAdaptor,
    private readonly tocEntryService: TraitTocEntryService
  ) {}

  private getTocEntryByTocElement(tocElement: Element): Option<TraitTocEntry> {
    return this.tocEntryService.getInstance(
      fromNullable(tocElement.getAttribute('data-canbetoc-toc-id'))
    )
  }

  private getRelatedTocEntries(tocEntries: TraitTocEntry[]): TraitTocEntry[] {
    return flatten(
      tocEntries.map((entry) => {
        return [...entry.getParentItems(), entry]
      })
    )
  }

  useCase(
    id: string,
    tocBaseElementRef: RefObject<Element>,
    strategy: TraitStrategy,
    optionTocEntries: Option<TraitTocEntry[]>
  ): void {
    useEffect(() => {
      pipe(
        sequenceT(option)(
          optionTocEntries,
          fromNullable(tocBaseElementRef.current)
        ),
        map(([tocEntries, tocElement]) => {
          // 初期状態を構築する
          void strategy.handle(tocEntries) // eslint-disable-line no-void

          this.mutationObserverAdaptor.init(
            id,
            (moRecords: Readonly<MutationRecord[]>) => {
              const targetTocEntries = flatten(
                moRecords.map((record) => {
                  if (record.type === 'attributes') {
                    return [
                      this.getTocEntryByTocElement(record.target as Element)
                    ]
                  }

                  return Array.from(record.addedNodes).map((node) => {
                    return this.getTocEntryByTocElement(node as Element)
                  })
                })
              )
                .filter(isSome)
                .map((option) => option.value)

              const relatedTocEntries = this.getRelatedTocEntries(
                targetTocEntries
              )

              // eslint-disable-next-line no-void
              void (async () => {
                return await strategy.handle(relatedTocEntries)
              })()
            }
          )

          this.mutationObserverAdaptor.observe(id, tocElement)
        })
      )

      return () => {
        this.mutationObserverAdaptor.disconnect(id)
      }
    }, [tocBaseElementRef.current, strategy])
  }
}
