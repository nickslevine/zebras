const assert = require("assert")

const Z = require("../source/index.js")

describe("gbMin", () => {
  it("calculates min for grouped objects", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbMin("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      { group: "A", min: 3 },
      { group: "B", min: 2 },
      { group: "C", min: 75 },
    ])
  })
})
