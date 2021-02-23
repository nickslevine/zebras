import { curry, sort, length, filter} from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Quantile of a value in a series of series using midpoint interpolation. see https://numpy.org/doc/stable/reference/generated/numpy.percentile.html
 * 
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Number} quantile to calculate as represented by a number from 0 to 1
 * @param {Array} array of values to calculate percentile from 
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75, 150]
 * Z.quantile(.95, series)
 * // 112.5
 */
const quantile = curry((q, arr ) => {

    
    const sortedArr = sort(diff, filter(isNumeric, arr))

    // if requesting 0 or 1 do the easy thing. 
    if (q == 0) {
        return sortedArr[0];
    }
    else if (q == 1) {
        return sortedArr[length(sortedArr) - 1];
    }
    else if ( q > 1 || q < 0) {
        throw new RangeError("Quantile must be value between 0 and 1")
    }

    const i = q * length(sortedArr)
    var low_index = sortedArr[Math.floor(i - 1)]
    var high_index = sortedArr[Math.floor(i)]
    return (low_index + high_index)/2


    
})

const diff = function(a, b) { return a - b; };


export default quantile
