import { keys, filter, sum } from "ramda"

import isNumeric from "./internal/isNumeric"
import getCol from "./getCol"

/**
 * Calculate sums for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbMean, Z.gbStd, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbSum("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "sum": 10}, {"group": "B", "sum": 7}, {"group": "C", "sum": 75}]
 */
const gbSum = (col, groupByObj) => {
  const groups = keys(groupByObj)
  const result = groups.map(i => {
    const df = groupByObj[i]
    const arr = getCol(col, df)
    const arrFiltered = filter(isNumeric, arr)
    return { group: i, sum: sum(arrFiltered) }
  })
  return result
}

export default gbSum
