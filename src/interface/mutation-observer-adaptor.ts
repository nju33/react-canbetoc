import { pipe } from 'fp-ts/lib/function'
import { fold, fromNullable, map } from 'fp-ts/lib/Option'
import { throttle } from 'throttle-debounce'
import { TraitMutationObserverAdaptor } from '../entities/mutation-observer-adaptor'

export class MutationObserverAdaptor implements TraitMutationObserverAdaptor {
  #map: Map<string, MutationObserver> = new Map()

  static mutationObserverInit: MutationObserverInit = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [
      'data-canbetoc-toc-instance-id',
      'data-canbetoc-toc-active-branch',
      'data-canbetoc-toc-active-item'
    ]
  }

  init(id: string, callback: MutationCallback): void {
    const optionObserver = fromNullable(this.#map.get(id))

    pipe(
      optionObserver,
      fold(
        () => {
          this.#map.set(id, new MutationObserver(throttle(200, callback)))
        },
        () => {}
      )
    )
  }

  disconnect(id: string): void {
    const optionObserver = fromNullable(this.#map.get(id))

    pipe(
      optionObserver,
      map((observer) => {
        observer.disconnect()
      })
    )
  }

  observe(id: string, baseElement: Element): void {
    const optionObserver = fromNullable(this.#map.get(id))

    pipe(
      optionObserver,
      map((observer) => {
        observer.observe(
          baseElement,
          MutationObserverAdaptor.mutationObserverInit
        )
      })
    )
  }
}
