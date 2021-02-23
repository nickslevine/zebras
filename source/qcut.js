import { curry,  length, filter, map, uniq,  findIndex, lte} from "ramda"

import isNumeric from "./internal/isNumeric"
import quantile from "./quantile"

/**
 * Quantile Cut: For input array X, return each values quantile where Q is 
 * the number of quantiles to use. Based on pandas qcut. Uses midpoint interpolation. 
 * 
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {Number} Integer for the number of quantiles to use 
 * @param {Array} array of values to calculate   
 * @return {Array}
 * @example
 *
 * const series = [...Array(275).keys()]
 * Z.valueCounts(Z.quantile(series))
 * // {"0":55, "1":55, "2":55, "3":55, "4":55, "5":55}
 */
const qcut = curry((q, base_arr, drop_duplicates = true ) => {

    
    const arr = filter(isNumeric, base_arr)

   
    if (q <= 1) {
        throw new RangeError(`${q} invalid must be whole number > 1`);
    }
    else if (q % 1 != 0 ) {
        throw new RangeError(`${q} invalid must be whole number > 1`);
    }

    const i = length(arr)
    var bins_percentiles = [...Array(q).keys()].map(bin => (bin * (100/q)/100)).filter(r => r != 0)
    bins_percentiles.push(1)
 
    const bin_edges = map(edge => quantile(edge, arr), bins_percentiles)
    
    var edger = a => findIndex(lte(a))(bin_edges)
    if (length(uniq(bin_edges)) != q) {
        if (drop_duplicates) {
            throw new RangeError("Duplicate bin edges. Change you bins or pass {drop_duplicates: false} ")
        }
    }
    return map(edger, arr)




    
})




export default qcut
