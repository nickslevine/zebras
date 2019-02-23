import { curry } from "ramda"

import min from "./min"
import max from "./max"

/**
 * Range of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Array} Array with min and max
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.getRange(series)
 * // [2, 75]
 */
const getRange = curry(arr => [min(arr), max(arr)])

export default getRange
