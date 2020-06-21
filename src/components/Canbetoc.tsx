import { pipe } from 'fp-ts/lib/function'
import { chain, mapNullable, toNullable } from 'fp-ts/lib/Option'
import React, { cloneElement, ReactElement, useContext, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  createTocClasssNameValue,
  implicitContext,
  StructTocClassNameContext,
  tocClassNameContext
} from '../contexts'
import { CanbetocList } from './CanbetocList'

export interface CanbetocProps {
  children: React.ReactElement
  id: string
  intersectionObserverInit?: IntersectionObserverInit
  selectors: string[]
  tocClassName?: Partial<StructTocClassNameContext>
}

export type CanbetocFC = React.FC<CanbetocProps>

export const Canbetoc: CanbetocFC = <Props extends CanbetocProps>(
  props: Props
) => {
  const {
    children,
    id,
    // The `{}` is just for the purpose to remove `undefined` type
    intersectionObserverInit = {},
    selectors,
    tocClassName
  } = props
  const { buildToc, getPortable, observe } = useContext(implicitContext)
  const childRef = React.useRef<Element>(null)
  const memoizedIntersectionObserverInit = useMemo(() => {
    return {
      // Default rootMargin
      rootMargin: '0px 0px -90%',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...intersectionObserverInit
    }
  }, [intersectionObserverInit])

  const [optionStructuredTocEntries, optionTocEntries] = buildToc.useCase(
    childRef,
    selectors
  )
  const optionPortable = getPortable.useCase(id)

  observe.useCase(optionTocEntries, memoizedIntersectionObserverInit)

  const expandProps = {
    ref: childRef
  }

  const tocElement = useMemo((): ReactElement | null => {
    return pipe(
      optionStructuredTocEntries,
      chain((tocEntries) => {
        return pipe(
          optionPortable,
          mapNullable((portable) => {
            return createPortal(
              <tocClassNameContext.Provider
                value={createTocClasssNameValue(tocClassName)}>
                <CanbetocList entries={tocEntries} />
              </tocClassNameContext.Provider>,
              portable
            )
          })
        )
      }),
      toNullable
    )
  }, [optionStructuredTocEntries, optionPortable])

  const cloned = cloneElement(children, expandProps)

  return (
    <>
      {tocElement}
      {cloned}
    </>
  )
}

Canbetoc.defaultProps = {
  intersectionObserverInit: {}
}
