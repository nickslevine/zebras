const assert = require("assert")

const Z = require("../zebras.js")

describe("merge", () => {
  it("joins two dataframes on a column", () => {
    const df1 = [
      { label: "A", value: 7 },
      { label: "B", value: 2 },
      { label: "C", value: 75 },
    ]
    const df2 = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]

    assert.deepStrictEqual(
      Z.merge(df1, df2, "label", "label", "_df1", "_df2"),
      [
        { label: "A", value_df1: 7, value_df2: "2010-12-13" },
        { label: "B", value_df1: 2, value_df2: "2010-12-15" },
        { label: "C", value_df1: 75, value_df2: "2010-12-17" },
      ]
    )
  })
})
