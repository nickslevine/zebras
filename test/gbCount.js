const assert = require("assert")

const Z = require("../zebras.js")

describe("gbCount", function() {
  it("calculates count for grouped objects", function() {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbCount("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      { count: 2, group: "A" },
      { count: 2, group: "B" },
      { count: 1, group: "C" },
    ])
  })
})
