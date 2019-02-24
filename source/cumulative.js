import { slice, map, range } from "ramda"

/**
 * Calculate cumulative statistics.
 *
 * Calculate statistics over a cumulative window from the start of the array.
 * Works wtih z.min, z.max, z.mean, z.std, z.sum, z.prod, etc., or any other
 * function that takes an array as a single argument.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate cumulative statistics
 * @param {Array} arr Series to calculate cumulative statistics for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.cumulative(Z.mean, series)
 * // [7, 4.5, 13, 17.25, 25, 33.333333333333336]
 */
const cumulative = (func, arr) => {
  const iRange = range(0, arr.length)
  const result = map(i => {
    const truncated = slice(0, i + 1, arr)
    return func(truncated)
  }, iRange)
  return result
}

export default cumulative
