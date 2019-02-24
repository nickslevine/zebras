import { curry, pick, map } from "ramda"

/**
 * Select a subset of columns.
 *
 * Accepts an array with the names of the columns to retain.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} cols Array of column names to pick
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.pickCols(["value"], df)
 * // [{"value": 7}, {"value": 2}, {"value": 75}]
 */
const pickCols = curry((cols, df) => map(pick(cols), df))

export default pickCols
