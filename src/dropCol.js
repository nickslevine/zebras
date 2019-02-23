import { curry, dissoc, map } from "ramda"

/**
 * Delete a column.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {String} col Name of the column to delete
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.dropCol("label", df)
 * // [{"value": 7}, {"value": 2}, {"value": 75}]
 */
const dropCol = curry((col, df) => map(dissoc(col), df))

export default dropCol
