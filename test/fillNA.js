const assert = require("assert")

const Z = require("../source/index.js")

describe("fillNA", () => {
  it("fills na values in a dataframe", () => {
    const df = [
      { label: "A", value: 10, count: null },
      { label: "B", value: NaN, count: 5 },
      { label: "C", value: 15, count: NaN },
      { label: "D", value: 0, count: undefined},
      { label: "E", value: null, count: 3 },
      { label: "F", value: undefined, count: 9 },
      { label: "G", value: 4, count: 2 },
    ]
    assert.deepStrictEqual(Z.fillNA(df, -1, []), [
      { label: "A", value: 10, count: -1 },
      { label: "B", value: -1, count: 5 },
      { label: "C", value: 15, count: -1 },
      { label: "D", value: 0, count: -1 },
      { label: "E", value: -1, count: 3 },
      { label: "F", value: -1, count: 9 },
      { label: "G", value: 4, count: 2 },
    ])

    assert.deepStrictEqual(Z.fillNA(df, -1, ["value"]), [
      { label: "A", value: 10, count: null },
      { label: "B", value: -1, count: 5 },
      { label: "C", value: 15, count: NaN },
      { label: "D", value: 0, count: undefined },
      { label: "E", value: -1, count: 3 },
      { label: "F", value: -1, count: 9 },
      { label: "G", value: 4, count: 2 },
    ])
  })
})
