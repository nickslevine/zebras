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
 * @param {df} df Series to front fill
 * @param {Array} cols Array of column names to convert. Set to null or [] for all.
 * @return {df}
 * @example
 *
 * const series = [{"label": "A", "value": 7}, {"label": "B", "value": NaN}, {"label": "C", "value": 75}]
 * Z.fFill(series)
 * // [{"label": "A", "value": 7}, {"label": "B", "value": 7}, {"label": "C", "value": 75}]
 */
const fFill = curry((df, cols) => {
    return df.map((each, index) => {
        var toReturn = {...each}
        if(index === 0)
            return toReturn
        if(!cols || !cols.length) {
            cols = keys(each)
        }
        cols.forEach(col => {
            if(!each[col] && each[col] !== 0 && df[index - 1][col]) {
                toReturn[col] = df[index - 1][col]
            }
        })
        return toReturn
    })
})

export default fFill
