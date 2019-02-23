import { curry, range, map } from "ramda"

/**
 * Percent changes
 *
 * Returns a new series with the percent changes between the values
 * in order of the input series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate percent changes for
 * @return {Array}
 * @example
 *
 * const series = [10, 15, 20, 25, 50, 55]
 * Z.pctChange(series)
 * // [NaN, 0.5, 0.33333333333333326, 0.25, 1, 0.10000000000000009]
 */
const pctChange = curry(arr => {
  const iRange = range(0, arr.length)
  const result = map(i => {
    if (i === 0) return NaN
    return arr[i] / arr[i - 1] - 1
  }, iRange)
  return result
})

export default pctChange
