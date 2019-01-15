const assert = require("assert")

const Z = require("../zebras.js")

describe("concat", function() {
  it("concatenates two dataframes", function() {
    const df1 = [{ label: "A", value: 7 }, { label: "B", value: 2 }]
    const df2 = [{ label: "C", value: 17 }, { label: "D", value: 2 }]
    assert.deepStrictEqual(Z.concat(df1, df2), [
      { label: "A", value: 7 },
      { label: "B", value: 2 },
      { label: "C", value: 17 },
      { label: "D", value: 2 },
    ])
  })
})
