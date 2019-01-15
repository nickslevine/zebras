const assert = require("assert")

const Z = require("../zebras.js")

describe("filter", function() {
  it("filters dataframe rows according to a filtering function", function() {
    const df = [
      { label: "A", value: 2 },
      { label: "B", value: 10 },
      { label: "C", value: 30 },
    ]
    assert.deepStrictEqual(Z.filter(r => r.value >= 10, df), [
      { label: "B", value: 10 },
      { label: "C", value: 30 },
    ])
  })
})
