import { EmitterEntity } from './emitter'

export interface StructAbsorber {
  /**
   * one-to-one
   */
  readonly emitter: EmitterEntity
  /**
   * Displayed in viewport
   */
  readonly hierarchy: number
  readonly id: string
}

export interface TraitAbsorber<Entity> {
  setHierarchy: (hierarchy: number) => Entity
  setId: (id: string) => Entity
}

export type AbsorberEntity = StructAbsorber & TraitAbsorber<AbsorberEntity>

export class Absorber implements AbsorberEntity {
  #struct: StructAbsorber

  constructor(struct: StructAbsorber) {
    this.#struct = struct
  }

  get hierarchy(): number {
    return this.#struct.hierarchy
  }

  get id(): string {
    return this.#struct.id
  }

  get emitter(): any {
    throw new Error()
  }

  setHierarchy(hierarchy: number): AbsorberEntity {
    return new Absorber({ ...this.#struct, hierarchy })
  }

  setId(id: string): AbsorberEntity {
    return new Absorber({ ...this.#struct, id })
  }
}
