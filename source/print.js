import Table from "cli-table3"
import { curry, keys, map, values } from "ramda"

/**
 * Prints dataframe.
 *
 * Returns the entire dataframe as an ASCII table.
 * If working in a local Node environment, wrap this and other printing
 * functions in `console.log()` to display ASCII tables.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {df} dataframe to print
 * @return {String} Entire dataframe as an ASCII table
 * @example
 *
 * Z.print(df)
 *
 * // will output an ASCII table like this:
 * ┌────────────┬───────┬───────┬───────┬───────┬───────────┬─────────┐
 * │ Date       │ Open  │ High  │ Low   │ Close │ Adj Close │ Volume  │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-03 │ 16.66 │ 16.66 │ 16.66 │ 16.66 │ 16.66     │ 1260000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-04 │ 16.85 │ 16.85 │ 16.85 │ 16.85 │ 16.85     │ 1890000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-05 │ 16.93 │ 16.93 │ 16.93 │ 16.93 │ 16.93     │ 2550000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-06 │ 16.98 │ 16.98 │ 16.98 │ 16.98 │ 16.98     │ 2010000 │
 * ├────────────┼───────┼───────┼───────┼───────┼───────────┼─────────┤
 * │ 1950-01-09 │ 17.08 │ 17.08 │ 17.08 │ 17.08 │ 17.08     │ 2520000 │
 * └────────────┴───────┴───────┴───────┴───────┴───────────┴─────────┘
 *
 */
const print = curry(df => {
  const headers = keys(df[0])
  const rows = map(values, df)
  const printTable = new Table({
    head: headers,
  })
  printTable.push(...rows)
  return `\n${printTable.toString()}`
})

export default print
