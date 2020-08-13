import { sequenceT } from 'fp-ts/lib/Apply'
import { pipe } from 'fp-ts/lib/function'
import { fold, map, Option, option } from 'fp-ts/lib/Option'
import * as React from 'react'
import { cloneElement, ReactElement, useContext, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  createTocClasssNameValue,
  implicitContext,
  StructTocClassNameContext,
  tocClassNameContext
} from '../contexts'
import { TraitStrategy } from '../strategies/strategy'
import { CanbetocList } from './CanbetocList'

export interface CanbetocProps {
  children: React.ReactElement
  id: string
  intersectionObserverInit?: IntersectionObserverInit
  selectors: string[]
  strategy: TraitStrategy
  tocClassName?: Partial<StructTocClassNameContext>
}

export type CanbetocFC = React.FC<Readonly<CanbetocProps>>

export const Canbetoc: CanbetocFC = <Props extends CanbetocProps>({
  children,
  id,
  // The `{}` is just for the purpose to remove `undefined` type
  intersectionObserverInit = {},
  selectors,
  strategy,
  tocClassName
}: Props) => {
  const {
    buildToc,
    getPortable,
    observe,
    observeAttribute,
    tocEntryService
  } = useContext(implicitContext)
  const baseElementRef = React.useRef<Element>(null)
  const tocBaseElementRef = React.useRef<HTMLUListElement>(null)
  const memoizedIntersectionObserverInit = useMemo(() => {
    return {
      // Default rootMargin
      rootMargin: '0px 0px -90%',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...intersectionObserverInit
    }
  }, [intersectionObserverInit])

  const [optionStructuredTocEntries, optionTocEntries] = buildToc.useCase(
    baseElementRef,
    selectors
  )
  const optionPortable = getPortable.useCase(id)

  observe.useCase(optionTocEntries, memoizedIntersectionObserverInit)
  observeAttribute.useCase(id, tocBaseElementRef, strategy, optionTocEntries)

  const optionTocElement = useMemo((): Option<ReactElement> => {
    return pipe(
      sequenceT(option)(optionStructuredTocEntries, optionPortable),
      map(([tocEntries, portable]) => {
        const entries = tocEntries.map((entry) =>
          tocEntryService.convertToDaoFrom(entry)
        )

        return createPortal(
          <tocClassNameContext.Provider
            value={createTocClasssNameValue(tocClassName)}>
            <CanbetocList
              ref={tocBaseElementRef}
              tocId={id}
              entries={entries}
            />
          </tocClassNameContext.Provider>,
          portable
        )
      })
    )
  }, [id, optionStructuredTocEntries, optionPortable])

  const cloned = useMemo(() => {
    return cloneElement(children, { ref: baseElementRef })
  }, [children, baseElementRef])

  const result = useMemo(() => {
    return pipe(
      optionTocElement,
      fold(
        () => <>{cloned}</>,
        (tocElement) => {
          return (
            <>
              {tocElement}
              {cloned}
            </>
          )
        }
      )
    )
  }, [optionTocElement, cloned])

  return result
}

Canbetoc.defaultProps = {
  intersectionObserverInit: {}
}
