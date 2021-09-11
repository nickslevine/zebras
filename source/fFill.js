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
 * @return {df}
 * @example
 *
 * const series = [{"label": "A", "value": 7}, {"label": "B", "value": NaN}, {"label": "C", "value": 75}]
 * Z.fFill(series)
 * // [{"label": "A", "value": 7}, {"label": "B", "value": 7}, {"label": "C", "value": 75}]
 */
const fFill = curry(df => {
    return df.map((each, index) => {
        if(index === 0)
            return each
        keys(each).forEach(col => {
            if(!each[col] && each[col] !== 0 && df[index - 1][col]) {
                each[col] = df[index - 1][col]
            }
        })
        return each
    })
})

export default fFill
