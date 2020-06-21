export function aassertLessThan10(num: number): asserts num is number {
  if (num > 10) {
    throw new RangeError('The maximum number of tiers is 10.')
  }
}
