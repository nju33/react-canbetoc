import { createContext } from 'react'
import {
  TocEntryService,
  TraitTocEntryService
} from '../entities/toc-entry-service'
import { BuildToc, TraitBuildToc } from '../events/build-toc'
import { GetPortable, TraitGetPortable } from '../events/get-portable'
import { Observe, TraitObserve } from '../events/observe'
import {
  ObserveAttribute,
  TraitObserveAttribute
} from '../events/observe-attribute'
import { MutationObserverAdaptor } from '../interface/mutation-observer-adaptor'
import { PortableDomAdaptor } from '../interface/portable-dom-adaptor'
import { TocEntryDomAdaptor } from '../interface/toc-entry-dom-adaptor'
import { TocListItemAdaptor } from '../interface/toc-list-item-adaptor'

export interface ImplicitContext {
  readonly buildToc: TraitBuildToc
  readonly getPortable: TraitGetPortable
  readonly observe: TraitObserve
  readonly observeAttribute: TraitObserveAttribute
  readonly tocEntryService: TraitTocEntryService
}

const tocEntryDomAdaptor = new TocEntryDomAdaptor()
const tocListItemAdaptor = new TocListItemAdaptor()
const tocEntryService = new TocEntryService(
  tocEntryDomAdaptor,
  tocListItemAdaptor
)
const portableDomAdaptor = new PortableDomAdaptor()
const mutationObserverAdaptor = new MutationObserverAdaptor()

export const implicitContext = createContext<ImplicitContext>({
  buildToc: new BuildToc(
    tocEntryDomAdaptor,
    tocListItemAdaptor,
    tocEntryService
  ),
  getPortable: new GetPortable(portableDomAdaptor),
  observe: new Observe(),
  observeAttribute: new ObserveAttribute(
    mutationObserverAdaptor,
    tocEntryService
  ),
  tocEntryService
})
