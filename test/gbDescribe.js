const assert = require("assert")

const Z = require("../zebras.js")

describe("gbDescribe", () => {
  it("returns summary statistis for grouped objects", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbDescribe("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      {
        count: 2,
        group: "A",
        max: 7,
        mean: 5,
        min: 3,
        std: 2.8284271247461903,
        sum: 10,
      },
      {
        count: 2,
        group: "B",
        max: 5,
        mean: 3.5,
        min: 2,
        std: 2.1213203435596424,
        sum: 7,
      },
      { count: 1, group: "C", max: 75, mean: 75, min: 75, std: NaN, sum: 75 },
    ])
  })
})
