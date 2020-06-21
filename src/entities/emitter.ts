import { pipe } from 'fp-ts/lib/function'
import {
  chain,
  fromNullable,
  isNone,
  mapNullable,
  none,
  Option,
  some
} from 'fp-ts/lib/Option'
import { AbsorberEntity } from './absorber'
import { TraitHtmlAttribute } from './data-table'

export interface StructEmitter {
  // readonly absorber: AbsorberEntity
  /**
   * Displayed in viewport
   */
  readonly displayed: Option<string>
  readonly id: string
}

export interface TraitEmitter<Entity> {
  setDisplayed: (displayed: boolean) => Entity
  setId: (id: string) => Entity
}

export type EmitterEntity = StructEmitter & TraitEmitter<EmitterEntity>

export interface EmitterAttributeDto {
  displayed: TraitHtmlAttribute
}

export class Emitter implements EmitterEntity {
  #struct: StructEmitter

  static fromById(id: string, attrs: EmitterAttributeDto): Emitter {
    if (isNone(fromNullable(document.getElementById(`#${id}`)))) {
      throw new Error(`Can't find element with #${id}`)
    }

    const displayed = pipe(
      fromNullable(
        document.querySelector(attrs.displayed.toSelector().toString())
      ),
      chain((element) =>
        fromNullable(element.getAttribute(attrs.displayed.toString()))
      )
    )

    return new Emitter({ id, displayed })
  }

  constructor(struct: StructEmitter) {
    this.#struct = struct
  }

  get displayed(): boolean {
    return this.#struct.displayed
  }

  get id(): string {
    return this.#struct.id
  }

  get absorber(): any {
    throw new Error()
  }

  setDisplayed(displayed: boolean): EmitterEntity {
    return new Emitter({ ...this.#struct, displayed })
  }

  setId(id: string): EmitterEntity {
    return new Emitter({ ...this.#struct, id })
  }
}
