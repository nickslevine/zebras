import { curry, pipe as _pipe } from "ramda"

/**
 * Pipe functions together by performing left-to-right function composition.
 *
 * @func
 * @memberOf Z
 * @category Composition
 * @param {Array} functions Array of functions to compose
 * @param {df} dataframe Zebras dataframe
 * @return {any} Result of the composed functions applied to dataframe
 * @example
 *
 * const data = [
 *   {"Date": "1997-01-01", "Value": "12"},
 *   {"Date": "1997-01-02", "Value": "14"},
 *   {"Date": "1997-01-03", "Value": "7"},
 *   {"Date": "1997-01-04", "Value": "112"}
 * ]
 * Z.pipe([
 *   Z.parseNums(["Value"]), // converts "Value" column to floats
 *   Z.getCol("Value"), // extracts "Value" column to array
 *   Z.mean() // calculates mean of "Value" array
 * ])(data)
 * // 36.25
 */
const pipe = curry((funcs, df) => _pipe(...funcs)(df))

export default pipe
