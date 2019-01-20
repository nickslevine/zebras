const assert = require("assert")

const Z = require("../zebras.js")

describe("slice", () => {
  it("gets dataframe rows by index", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "B", value: 2 },
      { label: "C", value: 75 },
    ]

    assert.deepStrictEqual(Z.slice(1, 2, df), [{ label: "B", value: 2 }])
    assert.deepStrictEqual(Z.slice(1, 1, df), [])
    assert.deepStrictEqual(Z.slice(0, 3, df), df)
  })
})
