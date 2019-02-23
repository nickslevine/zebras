import { curry, filter, sum as _sum } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Sum of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.sum(series)
 * // 170
 */
const sum = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return _sum(filteredArr)
})

export default sum
