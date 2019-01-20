const assert = require("assert")

const Z = require("../zebras.js")

describe("gbStd", () => {
  it("calculates std for grouped objects", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbStd("value", Z.groupBy(d => d.label, df))
    assert.deepStrictEqual(result, [
      { group: "A", std: 2.8284271247461903 },
      { group: "B", std: 2.1213203435596424 },
      { group: "C", std: NaN },
    ])
  })
})
