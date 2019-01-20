const assert = require("assert")

const Z = require("../zebras.js")

describe("gbMean", () => {
  it("calculates mean for grouped objects", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbMean("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      { group: "A", mean: 5 },
      { group: "B", mean: 3.5 },
      { group: "C", mean: 75 },
    ])
  })
})
