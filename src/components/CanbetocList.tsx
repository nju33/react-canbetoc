import { sequenceT } from 'fp-ts/lib/Apply'
import { pipe } from 'fp-ts/lib/function'
import {
  chain,
  fromNullable,
  getOrElse,
  map,
  option,
  some
} from 'fp-ts/lib/Option'
import * as React from 'react'
import {
  createContext,
  forwardRef,
  memo,
  NamedExoticComponent,
  RefAttributes,
  useCallback,
  useContext,
  useState
} from 'react'
import { tocClassNameContext } from '../contexts/toc-class-name-context'
import { TraitTocEntryDao } from '../entities/toc-entry-dao'

export const getKey = getOrElse(() => '')

const cacheContext = createContext({
  height: new Map<string, string>()
})

export interface CanbetocListProps {
  entries: TraitTocEntryDao[]
  tocId: string
}

export const CanbetocItem: React.FC<{
  entry: CanbetocListProps['entries'][number]
  hierarchyLevel: number
  tocId: string
}> = memo(({ entry, hierarchyLevel, tocId }) => {
  const getCacheKey = useCallback((id: string): string => `${tocId}-${id}`, [
    tocId
  ])
  const cache = useContext(cacheContext)
  const className = useContext(tocClassNameContext)
  const id = entry.useId()
  const [style, setStyle] = useState<any>({
    height: cache.height.get(getCacheKey(id)) ?? '0'
  })

  const elementRef = useCallback(
    (node: HTMLLIElement | null) => {
      const optionNode = fromNullable(node)
      pipe(
        optionNode,
        chain((element) => {
          return sequenceT(option)(
            some(element),
            fromNullable(element.querySelector('a'))
          )
        }),
        map(([liElement, anchorElement]) => {
          setStyle(() => {
            // const height = Math.max(window.getComputedStyle(liElement).lineHeight)
            // const height = String(window.getComputedStyle(liElement).lineHeight)
            const height = Math.max(
              liElement.clientHeight,
              anchorElement.clientHeight
            )

            cache.height.set(getCacheKey(id), String(height))
            return { height }
          })

          const anchorHeight = 'data-canbetoc-toc-anchor-height'
          if (
            liElement.getAttribute(anchorHeight) !==
            `${anchorElement.clientHeight}`
          ) {
            liElement.setAttribute(
              anchorHeight,
              `${anchorElement.clientHeight}`
            )
          }
        })
      )
    },
    [getCacheKey, entry, cache, setStyle]
  )
  return (
    <li
      key={entry.getRandomId()}
      ref={elementRef}
      className={className.item}
      style={{ ...style, overflow: 'hidden', transition: 'none' }}
      data-canbetoc-toc-instance-id={entry.getRandomId()}
      data-canbetoc-toc-id={id}
      data-canbetoc-toc-hierarchy-level={hierarchyLevel}
      data-canbetoc-toc-active-branch={false}
      data-canbetoc-toc-active-item={false}
      data-canbetoc-toc-latest-intersected={false}>
      <a
        style={{ display: 'inline-block' }}
        className={className.anchor}
        href={entry.useHref()}
        onClick={entry.useSmoothScrollCallback()}>
        <span className={className.text}>{entry.useText()}</span>
      </a>
      {entry.useItems().length > 0 ? (
        <ul className={className.list}>
          {entry.useItems().map((item) => {
            return (
              <CanbetocItem
                key={item.getRandomId()}
                entry={item}
                hierarchyLevel={hierarchyLevel + 1}
              />
            )
          })}
        </ul>
      ) : null}
    </li>
  )
})

export const CanbetocList: NamedExoticComponent<
  CanbetocListProps & RefAttributes<HTMLUListElement>
> = memo(
  forwardRef<HTMLUListElement, CanbetocListProps>(({ entries, tocId }, ref) => {
    const className = useContext(tocClassNameContext)
    const [cache] = useState({
      height: new Map<string, string>()
    })

    return (
      <cacheContext.Provider value={cache}>
        <ul
          ref={ref}
          className={`${className.list ?? ''} react-canbetoc__toc-list--root`}>
          {entries.map((entry) => {
            return (
              <CanbetocItem
                key={entry.getRandomId()}
                tocId={tocId}
                entry={entry}
                hierarchyLevel={1}
              />
            )
          })}
        </ul>
      </cacheContext.Provider>
    )
  })
)
