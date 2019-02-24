import { keys, reduce, min } from "ramda"

/**
 * Calculate min for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbMean, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMin("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "min": 3}, {"group": "B", "min": 2}, {"group": "C", "min": 75}]
 */
const gbMin = (col, groupByObj) => {
  const groups = keys(groupByObj)
  const result = groups.map(g => ({
    group: g,
    min: reduce((acc, value) => min(acc, value[col]), Infinity, groupByObj[g]),
  }))
  return result
}

export default gbMin
