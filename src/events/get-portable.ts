import { none, Option } from 'fp-ts/lib/Option'
import { useEffect, useState } from 'react'
import { TraitPortableDomAdaptor } from '../interface/portable-dom-adaptor'
import { TraitEvent } from './event'

export type TraitGetPortable = TraitEvent<Option<Element>, [string]>

/**
 * After did mount, fires mainly to construct a table of contents entry
 */
export class GetPortable implements TraitGetPortable {
  constructor(private readonly portableDomAdaptor: TraitPortableDomAdaptor) {}

  useCase(id: string): ReturnType<TraitGetPortable['useCase']> {
    const [portable, setPortable] = useState<Option<Element>>(none)

    useEffect(() => {
      setPortable(this.portableDomAdaptor.findById(id))
    }, [id, setPortable])

    return portable
  }
}
