import { curry, uniq } from "ramda"

/**
 * Get unique values in a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Array of values
 * @return {Array}
 * @example
 *
 * const series = [7, 7, 2, 30, 30, 56, 75]
 * Z.unique(series)
 * // [7, 2, 30, 56, 75]
 */
const unique = curry(arr => uniq(arr))

export default unique
