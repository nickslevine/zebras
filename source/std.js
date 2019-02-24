import { curry, filter, mean, map, sum, divide, subtract } from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Standard deviation of series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} arr Series to calculate standard deviation for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75]
 * Z.std(series)
 * // 31.36080356113344
 */
const std = curry(arr => {
  const filteredArr = filter(isNumeric, arr)
  const sampleMean = mean(filteredArr)
  const n = filteredArr.length
  const diffs = map(x => x - sampleMean, filteredArr)
  const diffsSquared = map(x => x ** 2, diffs)
  const summed = sum(diffsSquared)
  return Math.sqrt(divide(summed, subtract(n, 1)))
})

export default std
