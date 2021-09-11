import { keys, curry, range, map, forEach } from "ramda"

/**
 * Front fill a dataframe
 *
 * Returns the dataframes with NaN or null values filled in.
 * Does not treat 0 as something to fill in, but does treat "" as such
 *
 * @func
 * @memberOf Z
 * @category Analysis
 * @param {df} df Dataframe to fill NAs
 * @return {df}
 * @example
 *
 * const series = [{"label": "A", "value": 7}, {"label": "B", "value": NaN}, {"label": "C", "value": 75}]
 * Z.fillNA(series, -1)
 * // [{"label": "A", "value": 7}, {"label": "B", "value": -1}, {"label": "C", "value": 75}]
 */
const fillNA = curry((df, fillValue) => {
    return df.map((each) => {
        keys(each).forEach(col => {
            if(!each[col] && each[col] !== 0) {
                each[col] = fillValue
            }
        })
        return each
    })
})

export default fillNA
