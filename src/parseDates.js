import { curry, includes, mapObjIndexed, map } from "ramda"

/**
 * Convert columns to datestamp.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} cols Array of column names to convert
 * @param {df} dataframe Zebras dataframe to parse
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.parseDates(["value"], df)
 * // [{"label": "A", "value": 1292198400000}, {"label": "B", "value": 1292371200000}, {"label": "C", "value": 1292544000000}]
 */
const parseDates = curry((cols, df) => {
  const convertRow = r => {
    const converter = (value, key) => {
      if (includes(key, cols)) return Date.parse(value)
      return value
    }
    return mapObjIndexed(converter, r)
  }
  return map(convertRow, df)
})

export default parseDates
