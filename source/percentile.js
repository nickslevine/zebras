import { curry, sort, length, filter} from "ramda"

import isNumeric from "./internal/isNumeric"

/**
 * Percentile of a value in a series of series using midpoint interpolation. see https://numpy.org/doc/stable/reference/generated/numpy.percentile.html
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Number} percentile to calculate
 * @param {Array} array of values to calculate percentile from 
 * @return {Number}
 * @example
 *
 * const series = [7, 2, 30, 56, 75, 150]
 * Z.percentile(95, series)
 * // 112.5
 */
const percentile = curry((in_p, arr ) => {

    const p = confirmPercentile(in_p)
    const sortedArr = sort(diff, filter(isNumeric, arr))

    // if requesting 0 or 1 do the easy thing. 
    if (in_p == 0) {
        return sortedArr[0];
    }
    else if (in_p == 1) {
        return sortedArr[-1];
    }

    const i = p * length(sortedArr)
    var low_index = sortedArr[Math.floor(i - 1)]
    var high_index = sortedArr[Math.floor(i)]
    return (low_index + high_index)/2


    
})

const diff = function(a, b) { return a - b; };

function confirmPercentile(num) {
    if (num <1 & num >= 0) {
        return num
    }
    else if (num >=1 & num <= 100) {
        return num/100
    }
    else {
        throw new Error(`Input Value ${num} is not  a valid percentile`)
    }
}

export default percentile
