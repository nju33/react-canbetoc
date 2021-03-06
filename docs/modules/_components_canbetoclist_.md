[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["components/CanbetocList"](_components_canbetoclist_.md)

# Module: "components/CanbetocList"

## Index

### Interfaces

* [CanbetocListProps](../interfaces/_components_canbetoclist_.canbetoclistprops.md)

### Variables

* [CanbetocItem](_components_canbetoclist_.md#const-canbetocitem)
* [CanbetocList](_components_canbetoclist_.md#const-canbetoclist)
* [cacheContext](_components_canbetoclist_.md#const-cachecontext)
* [getKey](_components_canbetoclist_.md#const-getkey)

## Variables

### `Const` CanbetocItem

• **CanbetocItem**: *React.FC‹object›* = memo(({ entry, hierarchyLevel, tocId }) => {
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
                tocId={tocId}
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

*Defined in [src/components/CanbetocList.tsx:36](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/components/CanbetocList.tsx#L36)*

___

### `Const` CanbetocList

• **CanbetocList**: *NamedExoticComponent‹[CanbetocListProps](../interfaces/_components_canbetoclist_.canbetoclistprops.md) & RefAttributes‹HTMLUListElement››* = memo(
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

*Defined in [src/components/CanbetocList.tsx:125](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/components/CanbetocList.tsx#L125)*

___

### `Const` cacheContext

• **cacheContext**: *Context‹object›* = createContext({
  height: new Map<string, string>()
})

*Defined in [src/components/CanbetocList.tsx:27](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/components/CanbetocList.tsx#L27)*

___

### `Const` getKey

• **getKey**: *function* = getOrElse(() => '')

*Defined in [src/components/CanbetocList.tsx:25](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/components/CanbetocList.tsx#L25)*

#### Type declaration:

▸ (`ma`: Option‹A›): *A*

**Parameters:**

Name | Type |
------ | ------ |
`ma` | Option‹A› |
