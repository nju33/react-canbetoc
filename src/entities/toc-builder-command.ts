import 'regenerator-runtime/runtime'
import { takeLeftWhile } from 'fp-ts/lib/Array'
import { fromPredicate, getOrElse, Option, some } from 'fp-ts/lib/Option'
import { Selector, TraitSelector } from './selector'
import { TraitTocBuilder } from './toc-builder'

export interface TraitTocBuilderCommand {
  /**
   * TocBuilder を操作開始
   *
   * @param builder - `TraitTocBuilder`の実態
   */
  execute: (builder: TraitTocBuilder) => TraitTocBuilder
}

export class TocBuilderCommand implements TraitTocBuilderCommand {
  constructor(
    private readonly selector: TraitSelector,
    private readonly elements: Element[]
  ) {}

  execute = (builder: TraitTocBuilder): TraitTocBuilder => {
    builder.setHierarchy(this.selector.getLevel() - 1)
    builder.addElements(this.elements)

    return builder
  }
}

/**
 * @param strings - string as a selector
 */
export function* generatorTocBuilderCommands(
  baseElement: Element,
  strings: string[]
): Generator<TraitTocBuilderCommand, undefined> {
  const selectors = strings.map((str, i) => new Selector(str, i + 1))
  const getOrFirstIndex = getOrElse(() => 0)
  let elements = Array.from(baseElement.querySelectorAll(selectors.join(',')))

  let selectorIndex: Option<number> = some(0)
  const getCurrentSelector = (): TraitSelector => {
    return selectors[getOrFirstIndex(selectorIndex)]
  }
  const matchCurrentSelector = (element: Element): boolean => {
    return getCurrentSelector().match(element)
  }

  const takeLeftWhileMatchingCurrentSelector = takeLeftWhile(
    matchCurrentSelector
  )

  const getNextSelectorIndex = fromPredicate((index: number) => index > -1)

  while (true) {
    const result = takeLeftWhileMatchingCurrentSelector(elements)
    const right = [...elements].slice(result.length)

    yield new TocBuilderCommand(getCurrentSelector(), result)

    if (right.length === 0) {
      return
    } else {
      elements = right
      selectorIndex = getNextSelectorIndex(
        selectors.findIndex((selector) => {
          return selector.match(right[0])
        })
      )
    }
  }
}
