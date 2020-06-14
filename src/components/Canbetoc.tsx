import React from 'react'
import { createPortal } from 'react-dom'
import { useMount } from 'react-use'
import { throttle } from 'throttle-debounce'
import { servicesContext } from '../contexts/services-context'
import { CanbetocEmitter } from '../models/canbetoc-emitter'
import { StructCanbetoocEventContext } from '../models/event-context'
import { TraitStackNode } from '../models/stack-node'
import { CanbetocList } from './CanbetocList'

export interface CanbetocPropsIgnoredTocFeatures {
  noToc?: true
}

export interface CanbetocPropsWithTocFeatures {
  noToc?: false
}

export interface CanbetocPropsCommonn {
  autoReplaceHashById?: boolean
  children: React.ReactElement
  // FIXME
  handleElementEntersOntoVisible?: (
    context: StructCanbetoocEventContext
  ) => void
  id: string | number
  // FIXME
  onIntoOutOfViewport?: (context: { tocAnchorElements: Element[] }) => void
  // FIXME
  onIntoViewport?: (context: { tocAnchorElements: Element[] }) => void
  selectors: string[]
}

export type CanbetocProps =
  | (CanbetocPropsCommonn & CanbetocPropsIgnoredTocFeatures)
  | (CanbetocPropsCommonn & CanbetocPropsWithTocFeatures)

export type CanbetocFC = React.FC<CanbetocProps>

export function isPropsWithTocFeatures(
  props: any
): props is CanbetocPropsCommonn & CanbetocPropsWithTocFeatures {
  return Object.prototype.hasOwnProperty.call(props, 'handleTocAnchorClicks')
}

export function aassertLessThan10(num: number): asserts num is number {
  if (num > 10) {
    throw new RangeError('The maximum number of tiers is 10.')
  }
}

export function isElement(element: Element | null): element is Element {
  return element instanceof Element
}

export function isPrimarySelector(num: number): boolean {
  return num === 0
}

export function isElementVisibling(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight

  return (
    rect.top >= 0 &&
    rect.top <=
      (!isNaN(windowHeight)
        ? windowHeight
        : document.documentElement.clientHeight)
  )
}

// FIXME
export function createObserver(
  id: string,
  handle: Required<CanbetocPropsCommonn>['handleElementEntersOntoVisible'],
  emitters: Element[]
): IntersectionObserver {
  const getVisiblingElements = (element: Element): Element[] => {
    const index = emitters.findIndex((emitter) => emitter === element)
    if (index === -1) {
      return []
    }

    const result = [element]
    for (const emitter of emitters.slice(index + 1)) {
      if (!isElementVisibling(emitter)) {
        break
      }

      result.push(emitter)
    }

    return result
  }

  return new IntersectionObserver(
    throttle(200, (entries) => {
      const firstVisiblingEntriesOrUndefined = entries.find(
        (entry) => entry.intersectionRatio > 0
      )

      if (typeof firstVisiblingEntriesOrUndefined === 'undefined') {
        return
      }

      const { target: firstVisiblingElement } = firstVisiblingEntriesOrUndefined
      if (firstVisiblingElement.id !== '') {
        history.replaceState('', '', `#${firstVisiblingElement.id}`)
      }

      const visiblingElements = getVisiblingElements(firstVisiblingElement)

      // FIXME
      handle({
        get emitters(): CanbetocEmitter[] {
          return emitters.map(
            (element): CanbetocEmitter => new CanbetocEmitter(id, element)
          )
        },
        get visiblingEmitters(): CanbetocEmitter[] {
          return visiblingElements.map(
            (element): CanbetocEmitter => new CanbetocEmitter(id, element)
          )
        },
        get firstVisiblingEmitters(): CanbetocEmitter {
          return new CanbetocEmitter(id, firstVisiblingElement)
        },
        get tocAnchorElements(): Element[] {
          return Array.from(
            document.querySelectorAll(
              `[data-canbetoc-id="${id}"] [data-canbetoc-for]`
            )
          )
        }
      })
    }),
    {
      rootMargin: '0px 0px -40% 0px'
    }
  )
}

export const Canbetoc: CanbetocFC = <Props extends CanbetocProps>(
  props: Props
) => {
  const {
    children,
    handleElementEntersOntoVisible,
    id,
    noToc = false,
    onIntoOutOfViewport,
    onIntoViewport,
    selectors
  } = props
  const [rendered, setRendered] = React.useState(false)
  useMount(setRendered.bind(null, true))
  const ref = React.useRef<Element>(null)
  const stackNodes = React.useRef<TraitStackNode[]>([])
  // FIXME
  const emitters = React.useRef<Element[]>([] as Element[])
  const { portalDestinationService, stackNodeService } = React.useContext(
    servicesContext
  )

  // FIXME
  React.useEffect(() => {
    if (ref.current === null) {
      return
    }

    const componentObserver = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.intersectionRatio === 0) {
        if (typeof onIntoOutOfViewport === 'function') {
          onIntoOutOfViewport({
            get tocAnchorElements(): Element[] {
              return Array.from(
                document.querySelectorAll(
                  `[data-canbetoc-id="${id}"] [data-canbetoc-for]`
                )
              )
            }
          })
        }
      } else {
        if (typeof onIntoViewport === 'function') {
          onIntoViewport({
            get tocAnchorElements(): Element[] {
              return Array.from(
                document.querySelectorAll(
                  `[data-canbetoc-id="${id}"] [data-canbetoc-for]`
                )
              )
            }
          })
        }
      }
    })
    componentObserver.observe(ref.current)

    const result: TraitStackNode[] = []
    let hierarchy: TraitStackNode[] = stackNodeService.genTemporary(10)

    const getChildrenWhere = (root: Element): Element[] => {
      return Array.from(root.querySelectorAll(selectors.join(',')))
    }
    const elements = (emitters.current = getChildrenWhere(ref.current))

    let observer: IntersectionObserver | undefined
    if (typeof handleElementEntersOntoVisible === 'function') {
      const throttled = throttle(200, handleElementEntersOntoVisible)
      observer = createObserver(`${id}`, throttled, elements)
      elements.forEach(observer.observe.bind(observer))
    }

    const isLastElement = (index: number): boolean => {
      return index === elements.length - 1
    }

    elements.forEach((element, i) => {
      for (const [selectorIndex, selector] of selectors.entries()) {
        aassertLessThan10(selectorIndex)

        if (!element.matches(selector)) {
          continue
        }

        const [parentNode, currentNode] = [
          hierarchy[selectorIndex - 1],
          hierarchy[selectorIndex]
        ]

        const stackNode = stackNodeService.create(element, selectorIndex)

        if (currentNode.isTemporary()) {
          const node = stackNode.inherit(currentNode)
          hierarchy[selectorIndex] = node
        } else {
          stackNode.setParent(parentNode)

          const hierarchyHead = hierarchy.slice(0, selectorIndex)
          // Reconstructing the hierarchy
          hierarchy = [
            ...hierarchyHead,
            stackNode,
            ...stackNodeService.genTemporary(
              10 - (selectorIndex + 1),
              parentNode
            )
          ]

          if (isPrimarySelector(selectorIndex)) {
            result.push(currentNode)
          }
        }

        if (parentNode !== undefined) {
          parentNode.addChildren(stackNode)
        }

        if (isLastElement(i)) {
          result.push(hierarchy[0])
        }

        break
      }
    })

    stackNodes.current = result

    return () => {
      componentObserver.disconnect()

      if (observer instanceof IntersectionObserver) {
        observer.disconnect()
      }
    }
  }, [
    ref,
    stackNodes,
    id,
    handleElementEntersOntoVisible,
    onIntoViewport,
    onIntoOutOfViewport
  ])

  const expandProps = {
    ref
  }

  let portal: React.ReactPortal | undefined
  if (rendered) {
    const portalRoot = portalDestinationService.get().getElement(id)

    if (!noToc && isElement(portalRoot)) {
      const contents: React.ReactElement = (
        <CanbetocList nodes={stackNodes.current} />
      )

      portal = createPortal(contents, portalRoot)
    } else if (!noToc) {
      console.warn(
        `The element with a data-canbetoc-id of "${id}" is missing. element in the DOM.`
      )
    }
  }
  const cloned = React.cloneElement(children, expandProps)

  return (
    <>
      {portal}
      {cloned}
    </>
  )
}

Canbetoc.defaultProps = {
  autoReplaceHashById: false,
  noToc: false
}
