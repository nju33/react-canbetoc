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
    list: 'canbetoc-toc_list',
    item: 'canbetoc-toc_listItem',
    ...value
  }
}

export const tocClassNameContext = createContext<StructTocClassNameContext>(
  createTocClasssNameValue()
)
