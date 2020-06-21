import { PortalDestination, TraitPortalDestination } from './portal-destination'

export interface TraitPortalDestinationFactory {
  get: () => TraitPortalDestination
}

export class PortalDestinationFactory implements TraitPortalDestinationFactory {
  get(): TraitPortalDestination {
    return new PortalDestination()
  }
}
