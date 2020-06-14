export interface TraitPortalDestination {
  getElement: (id: string | number) => Element | null
}

export class PortalDestination implements TraitPortalDestination {
  getElement(id: string | number): Element | null {
    return document.querySelector(`[data-canbetoc-id="${id}"]`)
  }
}
