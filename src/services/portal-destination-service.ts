import { TraitPortalDestination } from '../models/portal-destination'
import { TraitPortalDestinationFactory } from '../models/portal-destination-factory'

export interface TraitPortalDestinationService {
  get: () => TraitPortalDestination
}

export class PortalDestinationService implements TraitPortalDestinationService {
  constructor(private readonly factory: TraitPortalDestinationFactory) {}

  get(): TraitPortalDestination {
    return this.factory.create()
  }
}
