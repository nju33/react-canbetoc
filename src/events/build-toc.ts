import { pipe } from 'fp-ts/lib/function'
import { fromNullable, map, none, Option, some } from 'fp-ts/lib/Option'
import { RefObject, useEffect, useState } from 'react'
import { TocBuilder } from '../entities/toc-builder'
import { generatorTocBuilderCommands } from '../entities/toc-builder-command'
import { TraitTocEntry } from '../entities/toc-entry'
import { TraitTocEntryDomAdaptor } from '../entities/toc-entry-dom-adaptor'
import { TraitEvent } from './event'

export type TraitBuildToc = TraitEvent<
  [Option<TraitTocEntry[]>, Option<TraitTocEntry[]>],
  [RefObject<Element>, string[]]
>

/**
 * After did mount, fires mainly to construct a table of contents entry
 */
export class BuildToc implements TraitBuildToc {
  constructor(private readonly tocEntryDomAdaptor: TraitTocEntryDomAdaptor) {}

  useCase(
    baseElementRef: RefObject<Element>,
    selectors: string[]
  ): ReturnType<TraitBuildToc['useCase']> {
    const [pair, setPair] = useState<
      [Option<TraitTocEntry[]>, Option<TraitTocEntry[]>]
    >([none, none])
    // const [entries, setEntries] = useState<Option<TraitTocEntry[]>>(none)

    useEffect(() => {
      const OptionbaseElement = fromNullable(baseElementRef.current)

      pipe(
        OptionbaseElement,
        map((baseElement) => {
          const tocBuilder = new TocBuilder(this.tocEntryDomAdaptor)

          const commands = [
            ...generatorTocBuilderCommands(baseElement, selectors)
          ]
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
