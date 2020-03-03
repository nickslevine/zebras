import { keys, curry } from "ramda"

/**
 * Calculate count for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbStd, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbCount("value", Z.groupBy(d => d.label, df))
 * // [{"count": 2, "group": "A"}, {"count": 2, "group": "B"}, {"count": 1, "group": "C"}]
 */
const gbCount = curry((col, groupByObj) => {
  const groups = keys(groupByObj)
  return groups.map(g => ({ group: g, count: groupByObj[g].length }))
})

export default gbCount
