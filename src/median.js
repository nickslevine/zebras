import { curry, filter, median as _median } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Median of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate median for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.median(series)
 * // 30
 */
const median = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  return _median(filteredArr)
})

export default median
