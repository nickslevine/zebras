const assert = require("assert")

const Z = require("../source/index.js")

describe("fillNA", () => {
  it("fills na values in a dataframe", () => {
    const df = [
      { label: "A", value: 10 },
      { label: "B", value: NaN },
      { label: "C", value: 15 },
      { label: "D", value: 0 },
      { label: "E", value: null },
      { label: "F", value: undefined },
      { label: "G", value: 4 },
    ]
    assert.deepStrictEqual(Z.fillNA(df, -1), [
      { label: "A", value: 10 },
      { label: "B", value: -1 },
      { label: "C", value: 15 },
      { label: "D", value: 0 },
      { label: "E", value: -1 },
      { label: "F", value: -1 },
      { label: "G", value: 4 },
    ])
  })
})
