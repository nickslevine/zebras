const assert = require("assert")

const Z = require("../source/index.js")

describe("tail", () => {
  it("returns dataframe with last n rows of input dataframe", () => {
    const df = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.tail(2, df), [
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ])
  })
})
