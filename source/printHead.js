import { take } from "ramda"

import print from "./print"

/**
 * Print first n rows of dataframe.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {Number} n Number of rows to print
 * @param {df} dataframe
 * @return {String} First `n` rows of dataframe as an ASCII table
 * @see Z.print, Z.printTail
 * @example
 *
 * Z.printHead(3, df)
 *
 * // will output an ASCII table like this:
 * ┌────────────┬───────┬───────┬───────┬───────┬───────────┬─────────┐
 * │ Date       │ Open  │ High  │ Low   │ Close │ Adj Close │ Volume  │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-05 │ 16.93 │ 16.93 │ 16.93 │ 16.93 │ 16.93     │ 2550000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-06 │ 16.98 │ 16.98 │ 16.98 │ 16.98 │ 16.98     │ 2010000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-09 │ 17.08 │ 17.08 │ 17.08 │ 17.08 │ 17.08     │ 2520000 │
 * └────────────┴───────┴───────┴───────┴───────┴───────────┴─────────┘
 *
 */
const printHead = (n, df) => {
  const truncated = take(n, df)
  return print(truncated)
}

export default printHead
