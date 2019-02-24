import countUnique from "./countUnique"
import min from "./min"
import max from "./max"
import median from "./median"
import mean from "./mean"
import std from "./std"

/**
 * Calculate summary statistics for a numerical series.
 *
 * Returns a single-row df with count, unique count, min, max, median, mean and
 * standard deviation of a numerical series.
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Function} func Function to caclulate cumulative statistics
 * @param {Array} arr Series to calculate cumulative statistics for
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 30, 56, 75]
 * Z.describe(series)
 * // [{"count": 6, "countUnique": 5, "max": "75.00000", "mean": "33.33333", "median": "30.00000", "min": "2.00000", "std": "28.09745"}]
 */
const describe = arr => [
  {
    count: arr.length,
    countUnique: countUnique(arr),
    min: min(arr).toFixed(5),
    max: max(arr).toFixed(5),
    median: median(arr).toFixed(5),
    mean: mean(arr).toFixed(5),
    std: std(arr).toFixed(5),
  },
]

export default describe
