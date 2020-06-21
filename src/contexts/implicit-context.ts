import { createContext } from 'react'
import { BuildToc, TraitBuildToc } from '../events/build-toc'
import { GetPortable, TraitGetPortable } from '../events/get-portable'
import { Observe, TraitObserve } from '../events/observe'
import { PortableDomAdaptor } from '../interface/portable-dom-adaptor'
import { TocEntryDomAdaptor } from '../interface/toc-entry-dom-adaptor'

export interface ImplicitContext {
  readonly buildToc: TraitBuildToc
  readonly getPortable: TraitGetPortable
  readonly observe: TraitObserve
}

const tocEntryDomAdaptor = new TocEntryDomAdaptor()
const portableDomAdaptor = new PortableDomAdaptor()

export const implicitContext = createContext<ImplicitContext>({
  buildToc: new BuildToc(tocEntryDomAdaptor),
  getPortable: new GetPortable(portableDomAdaptor),
  observe: new Observe()
})
