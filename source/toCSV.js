import fs from "fs"

import { curry, join, keys, nth, map, values } from "ramda"

/**
 * Synchronously writes a dataframe to a CSV file.
 *
 * @func
 * @memberOf Z
 * @category IO
 * @param {df} df Zebras dataframe to write
 * @param {String} filepath File path for the CSV file to write
 * @return {undefined}
 * @example
 *
 * Z.toCSV(filepath, df)
 */
const toCSV = curry((filepath, df) => {
  try {
    const headers = join(",", keys(nth(0, df)))
    const rows = map(values, df)
    const rowStrings = join("\n", map(join(","), rows))
    fs.writeFileSync(filepath, `${headers}\n${rowStrings}`)
    return df
  } catch (error) {
    return error
  }
})

export default toCSV
