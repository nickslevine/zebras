import head from "./head"

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
 * Z.randomSample(3, df)
 * // returns a new dataframe with the 3 random rows of `df`
 *
 */
const randomSample = (n, df) => {
  const randomSorted = df.sort(() => Math.random() - 0.5);
  return head(n, randomSorted)
}

export default randomSample
