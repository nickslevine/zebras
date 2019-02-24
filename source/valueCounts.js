import { curry, countBy, identity } from "ramda"

/**
 * Count number of occurences of each value in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Object}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.valueCounts(series)
 * // {"2": 1, "30": 2, "56": 1, "7": 1, "75": 1}
 */
const valueCounts = curry(arr => countBy(identity, arr))

export default valueCounts
