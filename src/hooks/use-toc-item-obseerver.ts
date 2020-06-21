import { partition } from 'fp-ts/lib/Array'
import { useEffect } from 'react'
import { CanbetocProps } from '../components'
import { tocItemDataTable, tocListDataTable } from '../entities'
import { TocItem } from '../entities/toc-item'

export type UseTocItemObserver = (elements: Element[]) => void

function isDisplayed(entry: IntersectionObserverEntry): boolean {
  return entry.intersectionRatio > 0
}

const AttributeDto = {
  id: tocItemDataTable.getAttribute('id'),
  displayed: tocItemDataTable.getAttribute('displayed'),
  rootIndex: tocItemDataTable.getAttribute('rootIndex'),
  hierarchyIndex: tocItemDataTable.getAttribute('hierarchyIndex')
}

export const useTocItemObserver: UseTocItemObserver = (elements) => {
  useEffect(() => {
    const partitionByDisplayState = partition(isDisplayed)

    const observer = new IntersectionObserver((entries) => {
      const {
        left: displayedElements,
        right: notDisplayedElements
      } = partitionByDisplayState(entries)

      displayedElements.forEach(({ target: element }) => {
        const tocItem = TocItem.fromById(element.id, AttributeDto)
      })

      notDisplayedElements.forEach(({ target: element }) => {
        // ...
      })
    })

    return () => {
      observer.disconnect()
    }
  }, elements)
}
