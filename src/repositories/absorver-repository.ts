import { AbsorberEntity } from '../entities/absorber'
import { TraitAbsorberRepository } from '../entities/trait-absorver-repository'

export class AbsorberRepository implements TraitAbsorberRepository {
  constructor(public readonly selector: string) {}

  update(entity: AbsorberEntity): void {
    document.querySelector()
  }
}
