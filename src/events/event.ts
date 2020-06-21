export interface TraitEvent<Returns, Arguments extends any[]> {
  useCase: (...args: Arguments) => Returns
}
