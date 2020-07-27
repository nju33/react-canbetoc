import { pipe } from 'fp-ts/lib/function'
import { map } from 'fp-ts/lib/Option'
import { TraitTocEntry } from '../../entities'
import { TraitStrategy } from '../storategy'

export class ExpansionStrategy implements TraitStrategy {
  async handle(tocEntries: TraitTocEntry[]): Promise<void> {
    tocEntries.forEach((entry) => {
      pipe(
        entry.getElement(),
        map((element) => {
          element.style.height = ''

          Array.from(
            element.querySelectorAll('[data-canbetoc-toc-id]')
          ).forEach((childElement) => {
            if (childElement instanceof HTMLElement) {
              childElement.style.height = ''
            }
          })
        })
      )
    })
  }
}
