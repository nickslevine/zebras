import { curry, filter, product } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Product of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.prod(series)
 * // 1764000
 */
const prod = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return product(filteredArr)
})

export default prod
