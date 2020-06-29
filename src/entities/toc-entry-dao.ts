import { pipe } from 'fp-ts/lib/function'
import { fold, getOrElse, map, toNullable } from 'fp-ts/lib/Option'
import { useCallback, useMemo } from 'react'
import { TraitTocEntry } from './toc-entry'
import { TraitTocEntryService } from './toc-entry-service'

export interface TraitTocEntryDao {
  getRandomId: () => string
  useHierarchyLevel: () => number
  /**
   * A memoized href value which is extracted the value of the TocEntry#target
   */
  useHref: () => string
  /**
   * A memoized id value which is extracted the value of the TocEntry#getId
   */
  useId: () => string
  /**
   * A memoized items value which is extracted the value of the TocEntry#getItems and converted into this
   */
  useItems: () => TraitTocEntryDao[]
  /**
   * A memoized callback
   *
   * @eventProperty
   */
  useSmoothScrollCallback: () => (event: React.MouseEvent<HTMLElement>) => void
  /**
   * A memoized text which is extracted the value of the TocEntry#element
   */
  useText: () => string | null
}

export class TocEntryDao implements TraitTocEntryDao {
  constructor(
    private readonly tocEntryService: TraitTocEntryService,
    private readonly entry: TraitTocEntry
  ) {}

  #getKey = getOrElse(() => '')
  #randomId = String(Math.floor(Math.random() * 1_000_000_000_000))

  getRandomId(): string {
    return this.#randomId
  }

  useId(): string {
    return useMemo(() => this.#getKey(this.entry.getElementDataId()), [
      this.entry
    ])
  }

  useHierarchyLevel(): number {
    return useMemo(() => {
      return pipe(
        this.entry.getElementDataHierarcyLevel(),
        getOrElse(() => 99999)
      )
    }, [this.entry])
  }

  useHref(): string {
    return useMemo((): string => {
      return pipe(
        this.entry.getElementDataId(),
        fold(
          () => '#',
          (id) => `#${id}`
        )
      )
    }, [this.entry])
  }

  useItems(): TraitTocEntryDao[] {
    return useMemo(() => {
      return this.entry
        .getItems()
        .map((item) => this.tocEntryService.convertToDaoFrom(item))
    }, [this.entry])
  }

  useSmoothScrollCallback(): (event: React.MouseEvent<HTMLElement>) => void {
    return useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()

        pipe(
          this.entry.getTarget(),
          map((element) => {
            element.scrollIntoView({ behavior: 'smooth' })
          })
        )
      },
      [this.entry]
    )
  }

  useText(): string | null {
    return useMemo((): string | null => {
      return pipe(
        this.entry.getTarget(),
        map((element) => {
          return element.textContent
        }),
        toNullable
      )
    }, [this.entry])
  }
}
