import { curry, prop, map } from "ramda"

/**
 * Extract a series to an array from a dataframe.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Name of the column to extract
 * @param {df} dataframe Zebras dataframe
 * @return {Array} Series array
 * @example
 *
 * const df = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.getCol("value", df)
 * // ["2010-12-13", "2010-12-15", "2010-12-17"]
 */
const getCol = curry((col, df) => map(prop(col), df))

export default getCol
