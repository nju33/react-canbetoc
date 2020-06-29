import { createContext } from 'react'

export interface StructTocClassNameContext {
  readonly anchor?: string
  readonly item?: string
  readonly list?: string
  readonly text?: string
}

export function createTocClasssNameValue(
  value: Partial<StructTocClassNameContext> = {}
): StructTocClassNameContext {
  return {
    list: 'react-canbetoc__toc-list',
    item: 'react-canbetoc__toc-list-item',
    ...value
  }
}

export const tocClassNameContext = createContext<StructTocClassNameContext>(
  createTocClasssNameValue()
)
