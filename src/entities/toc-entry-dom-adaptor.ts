import { Option } from 'fp-ts/lib/Option'

export interface TraitTocEntryDomAdaptor {
  findElementById: (id: string) => Option<HTMLElement>

  findTargetById: (id: string) => Option<HTMLElement>

  update: (element: Element, data: { displayed: boolean }) => void
}
