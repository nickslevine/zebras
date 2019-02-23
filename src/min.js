import { curry, filter, apply } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Min of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.min(series)
 * // 2
 */
const min = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return apply(Math.min, filteredArr)
})

export default min
