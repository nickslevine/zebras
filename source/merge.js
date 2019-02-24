import {
  keys,
  filter,
  includes,
  intersection,
  groupBy,
  prop,
  difference,
} from "ramda"

const renameCol = (oldColName, suffix, { [oldColName]: old, ...others }) => ({
  [oldColName + suffix]: old,
  ...others,
})

const renameDuplicateColumns = (cols, arr, suffix) => {
  let renamed = arr
  cols.forEach(c => {
    renamed = arr.map(r => renameCol(c, suffix, r))
  })
  return renamed
}

const fillRow = (row, cols) => {
  const rowCols = keys(row)
  const filledRow = row
  difference(cols, rowCols).forEach(c => {
    filledRow[c] = undefined
  })
  return row
}

/**
 * Join two dataframes on a column.
 *
 * Performs a left join on two dataframes.
 * The 'On' arguments set which column in each df to join on.
 * The 'Suffix' arguments determine what the suffix should be when the two
 * dataframes have overlapping column names besides the one being joined on.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {df} dfLeft First dataframe
 * @param {df} dfRight Second dataframe
 * @param {String} leftOn Left column to join on
 * @param {String} rightOn Right column to join on
 * @param {String} leftSuffix Left suffix for overlapping column names
 * @param {String} rightSuffix Right suffix for overlapping column names
 * @return {df} Joined dataframe
 * @example
 *
 * const df1 = [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 75}]
 * const df2 = [{"label": "A", "value": "2010-12-13"}, {"label": "B", "value": "2010-12-15"}, {"label": "C", "value": "2010-12-17"}]
 * Z.merge(df1, df2, "label", "label", "_df1", "_df2")
 * // [
 * //   { label: "A", value_df1: 7, value_df2: "2010-12-13" },
 * //   { label: "B", value_df1: 2, value_df2: "2010-12-15" },
 * //   { label: "C", value_df1: 75, value_df2: "2010-12-17" },
 * // ]
 */
const merge = (dfLeft, dfRight, leftOn, rightOn, leftSuffix, rightSuffix) => {
  const colsLeft = keys(dfLeft[0])
  const colsRight = keys(dfRight[0])
  const intersected = filter(
    x => !includes(x, [leftOn, rightOn]),
    intersection(colsLeft, colsRight)
  )

  const dfLeftUpdated = renameDuplicateColumns(intersected, dfLeft, leftSuffix)
  const dfRightUpdated = renameDuplicateColumns(
    intersected,
    dfRight,
    rightSuffix
  )
  const colsLeftUpdated = keys(dfLeftUpdated[0])
  const colsRightUpdated = keys(dfRightUpdated[0])

  const colsAll = Array.from(new Set([...colsLeftUpdated, ...colsRightUpdated]))
  const dfLeftGrouped = groupBy(prop(leftOn), dfLeftUpdated)
  const dfRightGrouped = groupBy(prop(rightOn), dfRightUpdated)
  const index = keys(dfLeftGrouped)

  return index.map(i => {
    try {
      return fillRow(
        { ...dfLeftGrouped[i]["0"], ...dfRightGrouped[i]["0"] },
        colsAll
      )
    } catch (err) {
      return fillRow({ ...dfLeftGrouped[i]["0"] }, colsAll)
    }
  })
}

export default merge
