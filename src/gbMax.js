import { keys, reduce, max } from "ramda"

/**
 * Calculate max for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMin, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMax("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "max": 7}, {"group": "B", "max": 5}, {"group": "C", "max": 75}]
 */
const gbMax = (col, groupByObj) => {
  const groups = keys(groupByObj)
  const result = groups.map(g => ({
    group: g,
    max: reduce((acc, value) => max(acc, value[col]), -Infinity, groupByObj[g]),
  }))
  return result
}

export default gbMax
