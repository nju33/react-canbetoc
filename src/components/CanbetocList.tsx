import React from 'react'
import { TraitStackNode } from '../models/stack-node'

export interface CanbetocListProps {
  nodes: TraitStackNode[]
}

export const CanbetocItem: React.FC<{
  node: CanbetocListProps['nodes'][number]
}> = ({ node }) => {
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
    <li className="canbetoc-toc_listItem">
      <a
        data-canbetoc-selector-priority={selectorPriority}
        data-canbetoc-for={node.getElementId()}
        href={href}>
        <span>{text}</span>
      </a>

      {children.length > 0 ? (
        <ul className="canbetoc-toc_list">
          {children.map((childNode) => {
            return <CanbetocItem key={childNode.getText()} node={childNode} />
          })}
        </ul>
      ) : null}
    </li>
  )
}

export const CanbetocList: React.FC<CanbetocListProps> = ({ nodes }) => {
  return (
    <ul className="canbetoc-toc_list">
      {nodes.map((node) => {
        return <CanbetocItem key={node.getText()} node={node} />
      })}
    </ul>
  )
}
