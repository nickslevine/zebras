import { take } from "ramda"

/**
 * Return dataframe with first n rows of input dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {Number} n Number of rows to select from start of df
 * @param {df} dataframe
 * @return {df} Zebras dataframe
 * @see Z.slice, Z.tail
 * @example
 *
 * Z.head(3, df)
 * // returns a new dataframe with the first 3 lines of `df`
 *
 */
const head = (n, df) => {
  const truncated = take(n, df)
  return truncated
}

export default head
