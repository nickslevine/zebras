import { curry, filter as _filter } from "ramda"

/**
 * Filter dataframe rows by using a filtering function.
 *
 * Accepts a test function that determines which rows of the supplied
 * dataframe are returned.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Function} func A filtering function
 * @param {df} dataframe Zebras dataframe to filter
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": 2}, {"label": "B", "value": 10}, {"label": "C", "value": 30}]
 * Z.filter(r => r.value >= 10, df)
 * // [{"label": "B", "value": 10}, {"label": "C", "value": 30}]
 */
const filter = curry((func, df) => _filter(func, df))

export default filter
