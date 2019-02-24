import { curry, sort } from "ramda"

/**
 * Sort dataframe rows by a column.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {String} col Name of the column to sort by
 * @param {String} direction Determines direction, pass `asc` for ascending and `desc` for descending
 * @param {df} dataframe Zebras dataframe to sort
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.sortByCol("value", "asc", df)
 * // [{"label": "B", "value": 2}, {"label": "A", "value": 7}, {"label": "C", "value": 75}]
 */
const sortByCol = curry((col, direction, df) =>
  sort((a, b) => (direction === "asc" ? a[col] - b[col] : b[col] - a[col]), df)
)

export default sortByCol
