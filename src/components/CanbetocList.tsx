import { pipe } from 'fp-ts/lib/function'
import { fold, getOrElse, map, toNullable, toUndefined } from 'fp-ts/lib/Option'
import React, {
  memo,
  NamedExoticComponent,
  useCallback,
  useContext,
  useMemo
} from 'react'
import { tocClassNameContext } from '../contexts/toc-class-name-context'
import { TraitTocEntry } from '../entities/toc-entry'

export const getKey = getOrElse(() => '')

export interface CanbeTocListProps {
  entries: TraitTocEntry[]
}

export const CanbetocItem: React.FC<{
  entry: CanbeTocListProps['entries'][number]
}> = ({ entry }) => {
  const className = useContext(tocClassNameContext)
  const href = useMemo((): string => {
    return pipe(
      entry.getId(),
      fold(
        () => '#',
        (id) => `#${id}`
      )
    )
  }, [entry])

  const tocId = useMemo((): string | undefined => {
    return pipe(entry.getId(), toUndefined)
  }, [entry])

  const items = useMemo((): TraitTocEntry[] => {
    return entry.getItems()
  }, [entry])

  const text = useMemo((): string | null => {
    return pipe(
      entry.getTarget(),
      map((element) => {
        return element.textContent
      }),
      toNullable
    )
  }, [entry])

  const smoothScroll = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()

      pipe(
        entry.getTarget(),
        map((element) => {
          element.scrollIntoView({ behavior: 'smooth' })
        })
      )
    },
    [entry]
  )

  return (
    <li className={className.item}>
      <a
        className={className.anchor}
        data-canbetoc-toc-id={tocId}
        href={href}
        onClick={smoothScroll}>
        <span className={className.text}>{text}</span>
      </a>

      {}

      {items.length > 0 ? (
        <ul className={className.list}>
          {items.map((item) => {
            return <CanbetocItem key={getKey(item.getId())} entry={item} />
          })}
        </ul>
      ) : null}
    </li>
  )
}

export const CanbetocList: NamedExoticComponent<CanbeTocListProps> = memo(
  ({ entries }) => {
    const className = useContext(tocClassNameContext)

    return (
      <ul className={className.list}>
        {entries.map((entry) => {
          return <CanbetocItem key={getKey(entry.getId())} entry={entry} />
        })}
      </ul>
    )
  }
)

// export const CanbetocList: React.FC<CanbetocListProps> = ({ nodes }) => {
//   const className = React.useContext(tocClassNameContext)

//   return (
//     <ul className={className.list}>
//       {nodes.map((node) => {
//         return <CanbetocItem key={node.getText()} node={node} />
//       })}
//     </ul>
//   )
// }
