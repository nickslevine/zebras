import { keys, curry, dissoc, map } from "ramda"

/**
 * Rename columns.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Object} mapper Dictionary in the format {"oldColName": "newColName"}
 * @param {df} dataframe Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.renameCols({"label": "name"}, df)
 * // [{"name": "A", "value": 7}, {"name": "B", "value": 2}, {"name": "C", "value": 75}]
 */
const renameCols = curry((mapper, df) => {
  return df.map((row) => {
    keys(mapper).forEach(key => {
        row[mapper[key]] = row[key]
        row = dissoc(key, row)
    });
    return row
  });
})

export default renameCols
