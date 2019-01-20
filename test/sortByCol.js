const assert = require("assert")

const Z = require("../zebras.js")

describe("sortByCol", () => {
  const df = [
    { label: "A", value: 7 },
    { label: "B", value: 2 },
    { label: "C", value: 75 },
  ]
  it("sorts dataframe rows by column name", () => {
    assert.deepStrictEqual(Z.sortByCol("value", "asc", df), [
      { label: "B", value: 2 },
      { label: "A", value: 7 },
      { label: "C", value: 75 },
    ])
  })
  it("respects order argument", () => {
    assert.deepStrictEqual(Z.sortByCol("value", "desc", df), [
      { label: "C", value: 75 },
      { label: "A", value: 7 },
      { label: "B", value: 2 },
    ])
  })
})
