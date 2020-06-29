import { filter } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import { getOrElse, map, none, Option, some } from 'fp-ts/lib/Option'
import { useEffect, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import { TraitTocEntry } from '../entities/toc-entry'
import { TraitEvent } from './event'

export type TraitObserve = TraitEvent<
  void,
  [Option<TraitTocEntry[]>, IntersectionObserverInit]
>

export const createFilterActive = (
  validElements: Element[]
): ((tocEntries: TraitTocEntry[]) => TraitTocEntry[]) =>
  filter<TraitTocEntry>((tocEntry) => {
    const optionTarget = tocEntry.getTarget()

    return pipe(
      optionTarget,
      map((target) => {
        return validElements.includes(target)
      }),
      getOrElse(() => false as boolean)
    )
  })

export const createFilterLatestIntersected = (): ((
  tocEntries: TraitTocEntry[]
) => TraitTocEntry[]) =>
  filter<TraitTocEntry>((tocEntry) => {
    return tocEntry.getElementDataLatestIntersected()
  })

export class Observe implements TraitObserve {
  private readonly update = throttle(
    500,
    (tocEntries: TraitTocEntry[], ioEntries: IntersectionObserverEntry[]) => {
      const validIoElements = ioEntries.map((ioEntry) => ioEntry.target)

      const filterLatestIntersected = createFilterLatestIntersected()
      const filteredLatestIntersected = filterLatestIntersected(tocEntries)
      const filterActive = createFilterActive(validIoElements)
      const filteredActive = filterActive(tocEntries)

      filteredLatestIntersected.forEach((tocEntry) => {
        // If the entry is activating yet,
        // the entry skips deactivating
        if (!filteredActive.includes(tocEntry)) {
          tocEntry.inactivate()
        }
      })

      filteredActive.forEach((tocEntry) => {
        tocEntry.activate()
        pipe(
          tocEntry.getElementDataId(),
          map((id) => {
            history.replaceState('', '', `#${id}`)
          })
        )
      })
    }
  )

  useCase(
    optionTocEntries: Option<TraitTocEntry[]>,
    memoizedIntersectionObserverInit: IntersectionObserverInit
  ): ReturnType<TraitObserve['useCase']> {
    const observerRef = useRef<Option<IntersectionObserver>>(none)

    useEffect(() => {
      pipe(
        optionTocEntries,
        map((tocEntries) => {
          const observer = new IntersectionObserver((ioEntries) => {
            const validIoEntries = ioEntries.filter(
              (ioEntry) => ioEntry.intersectionRatio > 0
            )
            if (validIoEntries.length === 0) {
              return
            }

            this.update(tocEntries, validIoEntries)
          }, memoizedIntersectionObserverInit)

          observerRef.current = some(observer)

          tocEntries.forEach((tocEntry) => {
            const optionTarget = tocEntry.getTarget()
            pipe(
              optionTarget,
              map((target) => {
                observer.observe(target)
              })
            )
          })
        })
      )

      return () => {
        pipe(
          observerRef.current,
          map((observer) => {
            observer.disconnect()
          })
        )
      }
    }, [optionTocEntries])
  }
}
