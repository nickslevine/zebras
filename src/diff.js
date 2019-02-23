import { curry, map, range } from "ramda"

/**
 * Returns a new series with the differences between the values in the order of
 * the input series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate differences for
 * @return {Array}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.diff(series)
 * // [NaN, -5, 28, 0, 26, 19]
 */
const diff = curry(arr => {
  const iRange = range(0, arr.length)
  const result = map(i => {
    if (i === 0) return NaN
    return arr[i] - arr[i - 1]
  }, iRange)
  return result
})

export default diff
