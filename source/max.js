import { curry, filter, apply } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Max of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.max(series)
 * // 75
 */
const max = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return apply(Math.max, filteredArr)
})

export default max
