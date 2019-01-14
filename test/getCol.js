const assert = require("assert")

const Z = require("../zebras.js")

describe("getCol", function() {
  it("extracts series to an array", function() {
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
