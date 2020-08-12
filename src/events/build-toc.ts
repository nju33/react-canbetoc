import { pipe } from 'fp-ts/lib/function'
import { fromNullable, map, none, Option, some } from 'fp-ts/lib/Option'
import { RefObject, useEffect, useState } from 'react'
import { TocBuilder } from '../entities/toc-builder'
import { generatorTocBuilderCommands } from '../entities/toc-builder-command'
import { TraitTocEntry } from '../entities/toc-entry'
import { TraitTocEntryDomAdaptor } from '../entities/toc-entry-dom-adaptor'
import { TraitTocEntryService } from '../entities/toc-entry-service'
import { TraitTocListItemAdaptor } from '../entities/toc-list-item-adaptor'
import { TraitEvent } from './event'

export type TraitBuildToc = TraitEvent<
  [Option<TraitTocEntry[]>, Option<TraitTocEntry[]>],
  [RefObject<Element>, string[]]
>

/**
 * After did mount, fires mainly to construct a table of contents entry
 */
export class BuildToc implements TraitBuildToc {
  constructor(
    private readonly tocEntryDomAdaptor: TraitTocEntryDomAdaptor,
    private readonly tocListItemAdaptor: TraitTocListItemAdaptor,
    private readonly tocEntryService: TraitTocEntryService
  ) {}

  useCase(
    baseElementRef: RefObject<Element>,
    selectors: string[]
  ): ReturnType<TraitBuildToc['useCase']> {
    const [pair, setPair] = useState<
      [Option<TraitTocEntry[]>, Option<TraitTocEntry[]>]
    >([none, none])
    useEffect(() => {
      const OptionbaseElement = fromNullable(baseElementRef.current)

      pipe(
        OptionbaseElement,
        map((baseElement) => {
          const tocBuilder = new TocBuilder(
            this.tocEntryDomAdaptor,
            this.tocListItemAdaptor,
            this.tocEntryService
          )

          const commands = Array.from(
            generatorTocBuilderCommands(baseElement, selectors)
          )
          tocBuilder.build(commands)

          setPair([
            some(tocBuilder.get().getItems()),
            some(tocBuilder.getList())
          ])
        })
      )
    }, [baseElementRef.current, selectors, setPair])

    return pair
  }
}
