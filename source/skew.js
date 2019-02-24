import { curry, filter, mean, map, sum } from "ramda"

import isNumeric from "./internal/isNumeric"
import std from "./std"

/**
 * Skew of a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate skew for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.skew(series)
 * // 0.17542841315728933
 */
const skew = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  const sampleStd = std(filteredArr)
  const stdCubed = sampleStd ** 3
  const sampleMean = mean(filteredArr)
  const diffs = map(x => x - sampleMean, filteredArr)
  const diffsCubed = map(x => x ** 3, diffs)
  const summed = sum(diffsCubed)
  const n = filteredArr.length
  return summed / n / stdCubed
})

export default skew
