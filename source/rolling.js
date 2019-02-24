import { slice, map, range } from "ramda"

/**
 * Calculate rolling statistics
 *
 * Calculate statistics over a moving window.
 * Works with Z.min, Z.max, Z.mean, Z.std, Z.sum, Z.prod, or any other function
 * that takes an array as a single argument.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate rolling statistics
 * @param {Number} n Range (?)
 * @param {Array} arr Series to calculate rolling statistics for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.rolling(Z.mean, 2, series)
 * // ["NotANumber", 4.5, 16, 30, 43, 65.5]
 */
const rolling = (func, n, arr) => {
  const iRange = range(0, arr.length)
  const result = map(i => {
    if (i + 1 < n) return "NotANumber"
    const truncated = slice(i - n + 1, i + 1, arr)
    return func(truncated)
  }, iRange)
  return result
}

export default rolling
