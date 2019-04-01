import { curry, mapObjIndexed, values } from "ramda"

/**
 * Maps groups using the provided function.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Function} func A mapper function
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"Day": "Monday", "value": 10}, {"Day": "Tuesday", "value": 5}, {"Day": "Monday", "value": 7}]
 * const grouped = Z.groupBy(x => x.Day, df)
 * Z.gbApply((group, index) => ({Day: index, value: Z.sum(Z.getCol("value", group))}), grouped)
 * // [{ Day: "Monday", value: 17 }, { Day: "Tuesday", value: 5 }]
 */

const gbApply = curry((func, groupByObj) => values(mapObjIndexed(func, groupByObj)))

export default gbApply
