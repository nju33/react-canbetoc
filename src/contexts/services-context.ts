import { createContext } from 'react'
import { PortalDestinationFactory } from '../models/portal-destination-factory'
import { StackNodeFactory } from '../models/stack-node-factory'
import {
  PortalDestinationService,
  TraitPortalDestinationService
} from '../services/portal-destination-service'
import {
  StackNodeService,
  TraitStackNodeService
} from '../services/stack-node-service'

export interface StructServicesContext {
  readonly portalDestinationService: TraitPortalDestinationService
  readonly stackNodeService: TraitStackNodeService
}

export const servicesContext = createContext<StructServicesContext>({
  stackNodeService: new StackNodeService(new StackNodeFactory()),
  portalDestinationService: new PortalDestinationService(
    new PortalDestinationFactory()
  )
})
