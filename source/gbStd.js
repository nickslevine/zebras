import { keys, filter, sum, mean, map, curry } from "ramda"

import isNumeric from "./internal/isNumeric"
import getCol from "./getCol"

/**
 * Calculate std for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbStd("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "std": 2.8284271247461903}, {"group": "B", "std": 2.1213203435596424}, {"group": "C", "std": NaN}]
 */
const gbStd = curry((col, groupByObj) => {
  const groups = keys(groupByObj)
  const result = groups.map(g => {
    const arr = filter(isNumeric, getCol(col, groupByObj[g]))
    const avg = mean(arr)
    const arrSquaredDiffs = map(x => (x - avg) ** 2, arr)
    const sumSquaredDiffs = sum(arrSquaredDiffs)
    return { group: g, std: Math.sqrt(sumSquaredDiffs / (arr.length - 1)) }
  })
  return result
})

export default gbStd
