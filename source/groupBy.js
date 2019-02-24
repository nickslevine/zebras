import { curry, groupBy as _groupBy } from "ramda"

/**
 * Create an object grouped by according to the supplied function.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function returning string key
 * @param {df} dataframe Zebras dataframe
 * @return {Object}
 * @example
 *
 * const df = [{"Day": "Monday", "value": 10}, {"Day": "Tuesday", "value": 5}, {"Day": "Monday", "value": 7}]
 * Z.groupBy(x => x.Day, df)
 * // {"Monday": [{"Day": "Monday", "value": 10}, {"Day": "Monday", "value": 7}], "Tuesday": [{"Day": "Tuesday", "value": 5}]}
 */
const groupBy = curry((func, df) => _groupBy(func, df))

export default groupBy
