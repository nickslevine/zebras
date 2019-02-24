const assert = require("assert")

const Z = require("../source/index.js")

describe("getCol", () => {
  it("extracts series to an array", () => {
    const df = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.getCol("value", df), [
      "2010-12-13",
      "2010-12-15",
      "2010-12-17",
    ])
  })
})
