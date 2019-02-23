import { curry, filter, mean, map, sum } from "ramda"

import isNumeric from "./internal/isNumeric"
import std from "./std"

/**
 * Kurtosis of a series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate kurtosis for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.kurt(series)
 * // -2.040541067936147
 */
const kurt = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  const sampleStd = std(filteredArr)
  const stdFourth = sampleStd ** 4
  const sampleMean = mean(filteredArr)
  const diffs = map(x => x - sampleMean, filteredArr)
  const diffsFourth = map(x => x ** 4, diffs)
  const summed = sum(diffsFourth)
  const n = filteredArr.length
  return summed / n / stdFourth - 3
})

export default kurt
