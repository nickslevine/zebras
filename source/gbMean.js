import gbSum from "./gbSum"

/**
 * Calculate mean for grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbMin, Z.gbMax, Z.gbCount, Z.gbSum, Z.gbStd, Z.gbDescribe
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbMean("value", Z.groupBy(d => d.label, df))
 * // [{"group": "A", "mean": 5}, {"group": "B", "mean": 3.5}, {"group": "C", "mean": 75}]
 */
const gbMean = (col, groupByObj) => {
  const summed = gbSum(col, groupByObj)
  const result = summed.map(i => {
    const count = groupByObj[i.group].length
    return { group: i.group, mean: i.sum / count }
  })
  return result
}

export default gbMean
