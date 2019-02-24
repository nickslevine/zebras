import { curry, assoc } from "ramda"

/**
 * Add a new column to a dataframe from an array.
 *
 * Use this function to add an array as a new column in a dataframe.
 * Make sure the array has the same length as the number of rows in the dataframe.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {String} col Name of the column do add
 * @param {Array} arr Array of values for the new column
 * @param {df} dataframe Zebras dataframe to add the new column to
 * @return {df}
 * @example
 *
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}]
 * const series = ["2010-12-15", "2010-12-16"]
 * Z.addCol("date", series, df)
 * // [{"date": "2010-12-15", "label": "A", "value": 7}, {"date": "2010-12-16", "label": "B", "value": 2}]
 */
const addCol = curry((col, arr, df) => {
  if (df.length !== arr.length) return "Arrays are not of equal length"
  return df.map((row, i) => assoc(col, arr[i], row))
})

const sransiansiRegex = () => {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))",
  ].join("|")

  return new RegExp(pattern, "g")
}

export default addCol
