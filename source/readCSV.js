import fs from "fs"

import { curry } from "ramda"

/**
 * Synchronously reads a CSV file.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {String} filepath File path for the CSV file to read
 * @return {df} Zebras dataframe
 * @example
 *
 * Z.readCSV(filepath)
 */
const readCSV = curry(filepath => {
  try {
    const data = fs.readFileSync(filepath).toString("utf8")
    const dataSplit = data.split("\n")
    const headers = dataSplit[0].split(",")
    const df = []
    for (let r = 1; r < dataSplit.length; r += 1) {
      const rowSplit = dataSplit[r].trim().split(",")
      const rowObject = {}
      if (headers.length === rowSplit.length) {
        for (let i = 0; i < rowSplit.length; i += 1) {
          rowObject[headers[i]] = rowSplit[i]
        }
        df.push(rowObject)
      }
    }
    return df
  } catch (error) {
    return error
  }
})

export default readCSV
