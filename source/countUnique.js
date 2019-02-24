import { curry, length, uniq } from "ramda"

/**
 * Count number of unique values in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.countUnique(series)
 * // 5
 */
const countUnique = curry(arr => length(uniq(arr)))

export default countUnique
