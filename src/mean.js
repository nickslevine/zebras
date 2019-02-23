import { curry, filter, mean as _mean } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Mean of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate mean for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.mean(series)
 * // 34
 */
const mean = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return _mean(filteredArr)
})

export default mean
