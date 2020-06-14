import React from 'react'
import { tocClassNameContext } from '../contexts/toc-class-name-context'
import { TraitStackNode } from '../models/stack-node'

export interface CanbetocListProps {
  nodes: TraitStackNode[]
}

export const CanbetocItem: React.FC<{
  node: CanbetocListProps['nodes'][number]
}> = ({ node }) => {
  const className = React.useContext(tocClassNameContext)
  const selectorPriority = node.getSelectorPriority()
  const text = node.getText()
  const children = node.getChildren()
  const href = React.useMemo(() => {
    const id = node.getElementId()

    if (typeof id === 'string') {
      return `#${id}`
    }

    return undefined
  }, [node])

  return (
    <li className={className.item}>
      <a
        className={className.anchor}
        data-canbetoc-selector-priority={selectorPriority}
        data-canbetoc-for={node.getElementId()}
        href={href}>
        <span className={className.text}>{text}</span>
      </a>

      {children.length > 0 ? (
        <ul className={className.list}>
          {children.map((childNode) => {
            return <CanbetocItem key={childNode.getText()} node={childNode} />
          })}
        </ul>
      ) : null}
    </li>
  )
}

export const CanbetocList: React.FC<CanbetocListProps> = ({ nodes }) => {
  const className = React.useContext(tocClassNameContext)

  return (
    <ul className={className.list}>
      {nodes.map((node) => {
        return <CanbetocItem key={node.getText()} node={node} />
      })}
    </ul>
  )
}
