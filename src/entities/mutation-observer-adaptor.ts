export interface TraitMutationObserverAdaptor {
  disconnect: (id: string) => void
  /**
   * Create and initialize a instance of the MutationObserver
   */
  init: (id: string, callback: MutationCallback) => void
  observe: (id: string, element: Element) => void
}
