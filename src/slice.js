import { curry, slice as _slice } from "ramda"

/**
 * Get dataframe rows by index.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} start The start index (inclusive).
 * @param {Number} end The end index (exclusive).
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.slice(1, 2, df)
 * // [{"label": "B", "value": 2}]
 */
const slice = curry((start, end, df) => _slice(start, end, df))

export default slice
