export interface TocListItemStructure {
  height: number | 'auto'
}

export const defaultTocListItemStructure = {
  height: 'auto'
}

export function activeTocListItemStructure(
  height: number
): TocListItemStructure {
  return {
    ...defaultTocListItemStructure,
    height
  }
}

export function tocListItemStructure(): TocListItemStructure {
  return {
    ...defaultTocListItemStructure,
    height: 0
  }
}
