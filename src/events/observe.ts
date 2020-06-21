import { pipe } from 'fp-ts/lib/function'
import { map, none, Option, some } from 'fp-ts/lib/Option'
import { useEffect, useRef } from 'react'
import { TraitTocEntry } from '../entities/toc-entry'
import { TraitEvent } from './event'

export type TraitObserve = TraitEvent<
  void,
  [Option<TraitTocEntry[]>, IntersectionObserverInit]
>

export class Observe implements TraitObserve {
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
            const displayedIoEntries = ioEntries.filter(
              (ioEntry) => ioEntry.intersectionRatio > 0
            )
            const displayedIoElements = displayedIoEntries.map(
              (ioEntry) => ioEntry.target
            )

            if (displayedIoElements.length === 0) {
              return
            }

            tocEntries.forEach((tocEntry) => {
              const optionTarget = tocEntry.getTarget()

              pipe(
                optionTarget,
                map((target) => {
                  if (displayedIoElements.includes(target)) {
                    tocEntry.setDisplayed(true)
                  } else {
                    tocEntry.setDisplayed(false)
                  }
                })
              )
            })
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
