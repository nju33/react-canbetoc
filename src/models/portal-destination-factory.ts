import { PortalDestination, TraitPortalDestination } from './portal-destination'

export interface TraitPortalDestinationFactory {
  create: () => TraitPortalDestination
}

export class PortalDestinationFactory implements TraitPortalDestinationFactory {
  create(): TraitPortalDestination {
    return new PortalDestination()
  }
}
