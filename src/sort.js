import { curry, sort as _sort } from "ramda"

/**
 * Sort dataframe rows using custom sorting function.
 *
 * Accepts a sorting function that determines the order of rows in the returned
 * dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Function} func A sorting function
 * @param {df} dataframe Zebras dataframe to sort
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * Z.sort((a, b) => b.value - a.value, df)
 * // [{ label: "C", value: 75 },{ label: "A", value: 7 },{ label: "B", value: 2 }]
 */
const sort = curry((func, df) => _sort(func, df))

export default sort
