const fs = require("fs")
const R = require("ramda")
const Table = require("cli-table3")

const readCSV = R.curry(filepath => {
  const data = fs.readFileSync(filepath).toString("utf8")
  const dataProcessed = R.pipe(
    R.split("\n"),
    R.map(R.split(",")),
    R.reject(x => x == "")
  )(data)
  const headers = R.flatten(R.take(1)(dataProcessed))
  const rows = R.tail(dataProcessed)
  const df = R.map(r => R.zipObj(headers)(r), rows)
  return df
})

const toCSV = R.curry((filepath, df) => {
  const headers = R.join(",", R.keys(R.nth(0, df)))
  const rows = R.map(R.values, df)
  const rowStrings = R.join("\n", R.map(R.join(","), rows))
  fs.writeFileSync(filepath, headers + "\n" + rowStrings)
})

const filter = R.curry((func, df) => {
  return R.filter(func, df)
})

const sort = R.curry((func, df) => {
  return R.sort(func, df)
})

const sortByCol = R.curry((col, direction, df) => {
  return R.sort((a, b) => {
    if (direction == "asc") {
      return a[col] - b[col]
    } else {
      return b[col] - a[col]
    }
  }, df)
})

const parseNums = R.curry((cols, df) => {
  const convertRow = r => {
    const converter = (value, key, obj) => {
      if (R.includes(key, cols)) {
        return parseFloat(value)
      } else {
        return value
      }
    }
    return R.mapObjIndexed(converter, r)
  }
  return R.map(convertRow, df)
})

const parseDates = R.curry((cols, df) => {
  const convertRow = r => {
    const converter = (value, key, obj) => {
      if (R.includes(key, cols)) {
        return Date.parse(value)
      } else {
        return value
      }
    }
    return R.mapObjIndexed(converter, r)
  }
  return R.map(convertRow, df)
})

const pickCols = R.curry((cols, df) => {
  return R.map(R.pick(cols), df)
})

const getCol = R.curry((col, df) => {
  return R.map(R.prop(col), df)
})

const mean = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.mean(filteredArr)
})

const median = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.median(filteredArr)
})

const std = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  const sampleMean = R.mean(filteredArr)
  const n = R.length(filteredArr)
  const diffs = R.map(x => x - sampleMean, filteredArr)
  const diffsSquared = R.map(x => Math.pow(x, 2), diffs)
  const summed = R.sum(diffsSquared)
  return Math.sqrt(R.divide(summed, R.subtract(n, 1)))
})

const skew = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  const sampleStd = std(filteredArr)
  const stdCubed = Math.pow(sampleStd, 3)
  const sampleMean = R.mean(filteredArr)
  const diffs = R.map(x => x - sampleMean, filteredArr)
  const diffsCubed = R.map(x => Math.pow(x, 3), diffs)
  const summed = R.sum(diffsCubed)
  const n = R.length(filteredArr)
  return summed / n / stdCubed
})

const kurt = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  const sampleStd = std(filteredArr)
  const stdFourth = Math.pow(sampleStd, 4)
  const sampleMean = R.mean(filteredArr)
  const diffs = R.map(x => x - sampleMean, filteredArr)
  const diffsFourth = R.map(x => Math.pow(x, 4), diffs)
  const summed = R.sum(diffsFourth)
  const n = R.length(filteredArr)
  return summed / n / stdFourth - 3
})

const corr = R.curry((arr1, arr2) => {
  if (R.length(arr1) != R.length(arr2)) {
    return "Arrays are not the same length"
  } else {
    const sampleMean1 = R.mean(arr1)
    const sampleMean2 = R.mean(arr2)
    const std1 = std(arr1)
    const std2 = std(arr2)
    const nMinusOne = R.subtract(R.length(arr1), 1)
    const rangeArray = R.range(0, R.length(arr1))
    const products = R.map(x => {
      return (arr1[x] - sampleMean1) * (arr2[x] - sampleMean2)
    }, rangeArray)
    const summedProducts = R.sum(products)
    return summedProducts / (nMinusOne * std1 * std2)
  }
})

const pipe = R.curry((funcs, df) => {
  return R.pipe(...funcs)(df)
})

const concat = R.curry((df1, df2) => {
  return R.concat(df1, df2)
})

const groupBy = R.curry((func, df) => {
  return R.groupBy(func, df)
})

const slice = R.curry((start, end, df) => {
  return R.slice(start, end, df)
})

const unique = R.curry(arr => {
  return R.uniq(arr)
})

const max = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.apply(Math.max, filteredArr)
})

const min = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.apply(Math.min, filteredArr)
})

const sum = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.sum(filteredArr)
})

const prod = R.curry(arr => {
  const filteredArr = R.reject(isNaN, arr)
  return R.product(filteredArr)
})

const getRange = R.curry(arr => {
  return [min(arr), max(arr)]
})

const countUnique = R.curry(arr => {
  return R.length(R.uniq(arr))
})

const dropCol = R.curry((col, df) => {
  return R.map(R.dissoc(col), df)
})

const valueCounts = R.curry(arr => {
  return R.countBy(R.identity, arr)
})

const addCol = R.curry((col, arr, df) => {
  if (R.equals(R.length(df), R.length(arr))) {
    return df.map((row, i) => R.assoc(col, arr[i], row))
  } else {
    return "Arrays are not of equal length"
  }
})

const deriveCol = R.curry((func, df) => {
  return R.map(func, df)
})

const print = R.curry(df => {
  const headers = R.keys(df[0])
  const rows = R.map(R.values, df)
  let printTable = new Table({
    head: headers,
  })
  printTable.push(...rows)
  //console.log("\n" + printTable.toString())
  return "\n" + printTable.toString()
})

const head = (n, df) => {
  const truncated = R.take(n, df)
  //console.log(print(truncated));
  return print(truncated)
}

const tail = (n, df) => {
  const truncated = R.takeLast(n, df)
  console.log(print(truncated))
  return print(truncated)
}

const pctChange = R.curry(arr => {
  const iRange = R.range(0, arr.length)
  const result = R.map(i => {
    if (i == 0) {
      return NaN
    } else {
      return arr[i] / arr[i - 1] - 1
    }
  }, iRange)
  return result
})

const diff = R.curry(arr => {
  const iRange = R.range(0, arr.length)
  const result = R.map(i => {
    if (i == 0) {
      return NaN
    } else {
      return arr[i] - arr[i - 1]
    }
  }, iRange)
  return result
})

const rolling = (func, n, arr) => {
  const iRange = R.range(0, arr.length)
  const result = R.map(i => {
    if (i + 1 < n) {
      return "NotANumber"
    } else {
      const truncated = R.slice(i - n + 1, i + 1, arr)
      return func(truncated)
    }
  }, iRange)
  return result
}

const cumulative = (func, arr) => {
  const iRange = R.range(0, arr.length)
  const result = R.map(i => {
    const truncated = R.slice(0, i + 1, arr)
    return func(truncated)
  }, iRange)
  return result
}

const describe = arr => {
  return [
    {
      count: arr.length,
      countUnique: countUnique(arr),
      min: min(arr).toFixed(5),
      max: max(arr).toFixed(5),
      median: median(arr).toFixed(5),
      mean: mean(arr).toFixed(5),
      std: std(arr).toFixed(5),
    },
  ]
}

const merge = (dfLeft, dfRight, leftOn, rightOn, leftSuffix, rightSuffix) => {
  const colsLeft = R.keys(dfLeft[0])
  const colsRight = R.keys(dfRight[0])
  const intersection = R.filter(
    x => !R.includes(x, [leftOn, rightOn]),
    R.intersection(colsLeft, colsRight)
  )

  const renameCol = (oldColName, suffix, { [oldColName]: old, ...others }) => {
    return {
      [oldColName + suffix]: old,
      ...others,
    }
  }

  const renameDuplicateColumns = (cols, arr, suffix) => {
    for (let c of cols) {
      arr = arr.map(r => renameCol(c, suffix, r))
    }
    return arr
  }

  const dfLeftUpdated = renameDuplicateColumns(intersection, dfLeft, leftSuffix)
  const dfRightUpdated = renameDuplicateColumns(
    intersection,
    dfRight,
    rightSuffix
  )
  const colsLeftUpdated = R.keys(dfLeftUpdated[0])
  const colsRightUpdated = R.keys(dfRightUpdated[0])

  const colsAll = Array.from(new Set([...colsLeftUpdated, ...colsRightUpdated]))
  const dfLeftGrouped = R.groupBy(R.prop(leftOn), dfLeftUpdated)
  const dfRightGrouped = R.groupBy(R.prop(rightOn), dfRightUpdated)
  const index = R.keys(dfLeftGrouped)
  const fillRow = (row, cols) => {
    const rowCols = R.keys(row)
    const diff = R.difference(cols, rowCols)
    for (let c of diff) {
      row[c] = undefined
    }
    return row
  }
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

const gbSum = (col, groupByObj) => {
  const groups = R.keys(groupByObj)
  const result = groups.map(i => {
    const df = groupByObj[i]
    const arr = getCol(col, df)
    const arrFiltered = R.reject(isNaN, arr)
    return { group: i, sum: R.sum(arrFiltered) }
  })
  return result
}

const gbMean = (col, groupByObj) => {
  const summed = gbSum(col, groupByObj)
  const result = summed.map(i => {
    const count = groupByObj[i.group].length
    return { group: i.group, mean: i.sum / count }
  })
  return result
}

const gbStd = (col, groupByObj) => {
  const groups = R.keys(groupByObj)
  const result = groups.map(g => {
    const arr = R.reject(isNaN, getCol(col, groupByObj[g]))
    const avg = R.mean(arr)
    const arrSquaredDiffs = R.map(x => Math.pow(x - avg, 2), arr)
    const sumSquaredDiffs = R.sum(arrSquaredDiffs)
    return { group: g, std: Math.sqrt(sumSquaredDiffs / (arr.length - 1)) }
  })
  return result
}

const gbCount = (col, groupByObj) => {
  const groups = R.keys(groupByObj)
  const result = groups.map(g => {
    return { group: g, count: groupByObj[g].length }
  })
  return result
}

const gbMin = (col, groupByObj) => {
  const groups = R.keys(groupByObj)
  const result = groups.map(g => {
    return {
      group: g,
      min: R.reduce(
        (acc, value) => R.min(acc, value[col]),
        Infinity,
        groupByObj[g]
      ),
    }
  })
  return result
}

const gbMax = (col, groupByObj) => {
  const groups = R.keys(groupByObj)
  const result = groups.map(g => {
    return {
      group: g,
      max: R.reduce(
        (acc, value) => R.max(acc, value[col]),
        -Infinity,
        groupByObj[g]
      ),
    }
  })
  return result
}

const gbDescribe = (col, groupByObj) => {
  const mins = gbMin(col, groupByObj)
  const maxes = gbMax(col, groupByObj)
  const counts = gbCount(col, groupByObj)
  const sums = gbSum(col, groupByObj)
  const means = gbMean(col, groupByObj)
  const stds = gbStd(col, groupByObj)
  const df1 = merge(mins, maxes, "group", "group", "--", "--")
  const df2 = merge(df1, counts, "group", "group", "--", "--")
  const df3 = merge(df2, sums, "group", "group", "--", "--")
  const df4 = merge(df3, means, "group", "group", "--", "--")
  const df5 = merge(df4, stds, "group", "group", "--", "--")
  return df5
}

module.exports = {
  readCSV: readCSV,
  toCSV: toCSV,
  filter: filter,
  parseNums: parseNums,
  pickCols: pickCols,
  getCol: getCol,
  mean: mean,
  median: median,
  std: std,
  pipe: pipe,
  concat: concat,
  groupBy: groupBy,
  slice: slice,
  unique: unique,
  countUnique: countUnique,
  corr: corr,
  min: min,
  max: max,
  getRange: getRange,
  dropCol: dropCol,
  valueCounts: valueCounts,
  addCol: addCol,
  deriveCol: deriveCol,
  print: print,
  head: head,
  tail: tail,
  pctChange: pctChange,
  rolling: rolling,
  parseDates: parseDates,
  sort: sort,
  sortByCol: sortByCol,
  describe: describe,
  merge: merge,
  gbSum: gbSum,
  gbMean: gbMean,
  gbCount: gbCount,
  gbMin: gbMin,
  gbMax: gbMax,
  gbStd: gbStd,
  gbDescribe: gbDescribe,
  cumulative: cumulative,
  sum: sum,
  prod: prod,
  diff: diff,
  skew: skew,
  kurt: kurt,
}
