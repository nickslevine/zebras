const assert = require("assert")

const Z = require("../source/index.js")

describe("head", () => {
  it("returns dataframe with first n rows of input dataframe", () => {
    const df = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.head(2, df), [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
    ])
  })
})
