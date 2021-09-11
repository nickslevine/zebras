const assert = require("assert")

const Z = require("../source/index.js")

describe("fFill", () => {
  it("front fills a data frame", () => {
    const df = [
      { label: "A", value: 10, date: "2010-12-13" },
      { label: "B", value: NaN, date: "2010-12-15" },
      { label: "C", value: 15, date: null },
    ]
    assert.deepStrictEqual(Z.fFill(df), [
      { label: "A", value: 10, date: "2010-12-13" },
      { label: "B", value: 10, date: "2010-12-15" },
      { label: "C", value: 15, date: "2010-12-15" },
    ])
  })
})
