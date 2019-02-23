import { curry, range, map, mean, subtract, sum } from "ramda"

import std from "./std"

/**
 * Correlation between two series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Array} series1 First series
 * @param {Array} series2 Second series
 * @return {Number}
 * @example
 *
 * const series1 = [10, 15, 20, 25, 50, 55]
 * const series2 = [12, 18, 34, 52, 71, 86]
 * Z.corr(series1, series2)
 * // 0.969035563335365
 */
const corr = curry((arr1, arr2) => {
  if (arr1.length !== arr2.length) return "Arrays are not the same length"

  const sampleMean1 = mean(arr1)
  const sampleMean2 = mean(arr2)
  const std1 = std(arr1)
  const std2 = std(arr2)
  const nMinusOne = subtract(arr1.length, 1)
  const rangeArray = range(0, arr1.length)
  const products = map(
    x => (arr1[x] - sampleMean1) * (arr2[x] - sampleMean2),
    rangeArray
  )
  const summedProducts = sum(products)
  return summedProducts / (nMinusOne * std1 * std2)
})

export default corr
