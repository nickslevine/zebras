import { takeLast } from "ramda"

/**
 * Return a dataframe with the last n rows of input dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} n Number of rows to select from bottom of df
 * @param {df} dataframe
 * @return {df} Zebras dataframe
 * @see Z.slice, z.head
 * @example
 *
 * Z.tail(3, df)
 * // returns a new dataframe with the last 3 lines of `df`
 *
 */
const tail = (n, df) => {
  const truncated = takeLast(n, df)
  return truncated
}

export default tail
