const assert = require("assert")

const Z = require("../zebras.js")

describe("tail", function() {
  it("returns dataframe with last n rows of input dataframe", function() {
    const df = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.tail(2, df).length, 2)
    assert.deepStrictEqual(Z.tail(2, df).find(d => d.label === "A"), undefined)
  })
})
