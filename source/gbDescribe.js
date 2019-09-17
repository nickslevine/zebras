import merge from "./merge"
import gbMin from "./gbMin"
import gbMax from "./gbMax"
import gbCount from "./gbCount"
import gbSum from "./gbSum"
import gbMean from "./gbMean"
import gbStd from "./gbStd"
import { curry } from "ramda"

/**
 * Describe grouped objects.
 *
 * Use it on groupBy objects - the output of Z.groupBy() - to analyze groups.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {String} col Column within the groups to be analyzed
 * @param {Object} groupByObj Object grouped by a column
 * @return {df} Dataframe with the calculated statistics
 * @see Z.groupBy, Z.gbStd, Z.gbMin, Z.gbCount, Z.gbSum, Z.gbMean, Z.max
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "A", "value": 3}, {"label": "B", "value": 2},  {"label": "B", "value": 5}, {"label": "C", "value": 75}]
 * Z.gbDescribe("value", Z.groupBy(d => d.label, df))
 * // [
 * //   { count: 2, group: "A", max: 7, mean: 5, min: 3, std: 2.8284271247461903, sum: 10 },
 * //   { count: 2, group: "B", max: 5, mean: 3.5, min: 2, std: 2.1213203435596424, sum: 7 },
 * //   { count: 1, group: "C", max: 75, mean: 75, min: 75, std: NaN, sum: 75 },
 * // ]
 */
const gbDescribe = curry((col, groupByObj) => {
  const mins = gbMin(col, groupByObj)
  const maxes = gbMax(col, groupByObj)
  const counts = gbCount(col, groupByObj)
  const sums = gbSum(col, groupByObj)
  const means = gbMean(col, groupByObj)
  const stds = gbStd(col, groupByObj)
  const df1 = merge(mins, maxes, "group", "group", "--", "--")
  const df2 = merge(df1, counts, "group", "group", "--", "--")
  const df3 = merge(df2, sums, "group", "group", "--", "--")
  const df4 = merge(df3, means, "group", "group", "--", "--")
  const df5 = merge(df4, stds, "group", "group", "--", "--")
  return df5
})

export default gbDescribe
