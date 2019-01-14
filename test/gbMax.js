const assert = require("assert")

const Z = require("../zebras.js")

describe("gbMax", function() {
  it("calculates max for grouped objects", function() {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbMax("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      { group: "A", max: 7 },
      { group: "B", max: 5 },
      { group: "C", max: 75 },
    ])
  })
})
