import { curry, includes, mapObjIndexed, map } from "ramda"

/**
 * Convert columns to numerical type (floats).
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Array} columnNames Array of column names to convert
 * @param {df} dataframe Zebras dataframe to parse
 * @return {df} Zebras dataframe
 * @example
 *
 * const df = [{"label": "A", "value": "7"}, {"label": "B", "value": "2"}, {"label": "C", "value": "75"}]
 * Z.parseNums(["value"], df)
 * // [{"label": "B", "value": 2}, {"label": "A", "value": 7}, {"label": "C", "value": 75}]
 */
const parseNums = curry((cols, df) => {
  const convertRow = r => {
    const converter = (value, key) => {
      if (includes(key, cols)) return +value
      return value
    }
    return mapObjIndexed(converter, r)
  }
  return map(convertRow, df)
})

export default parseNums
