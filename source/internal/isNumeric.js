/**
 * Checks if the input value is numeric, either is a number or can be parsed
 * as a number
 *
 * @func
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is numeric, otherwise `false`.
 * @example
 *
 * isNumeric(0); //=> true
 * isNumeric("1"); //=> true
 * isNumeric(null); //=> false
 * isNumeric(undefined); //=> false
 * isNumeric(""); //=> false
 * isNumeric("a"); //=> false
 */
const isNumeric = x => !Number.isNaN(parseFloat(x))

export default isNumeric
