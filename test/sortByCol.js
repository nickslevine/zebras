const assert = require("assert")

const Z = require("../zebras.js")

describe("sortByCol", function() {
  const df = [
    { label: "A", value: 7 },
    { label: "B", value: 2 },
    { label: "C", value: 75 },
  ]
  it("sorts dataframe rows by column name", function() {
    assert.deepStrictEqual(Z.sortByCol("value", "asc", df), [
      { label: "B", value: 2 },
      { label: "A", value: 7 },
      { label: "C", value: 75 },
    ])
  })
  it("respects order argument", function() {
    assert.deepStrictEqual(Z.sortByCol("value", "desc", df), [
      { label: "C", value: 75 },
      { label: "A", value: 7 },
      { label: "B", value: 2 },
    ])
  })
})
