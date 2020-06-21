export interface TraitRepository<Entity> {
  update: (entity: Entity) => void
}
