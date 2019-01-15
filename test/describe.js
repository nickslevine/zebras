const assert = require("assert")

const Z = require("../zebras.js")

describe("describe", function() {
  it("returns summary statistis", function() {
    const series = [7, 2, 30, 30, 56, 75]
    assert.deepStrictEqual(Z.describe(series), [
      {
        count: 6,
        countUnique: 5,
        max: "75.00000",
        mean: "33.33333",
        median: "30.00000",
        min: "2.00000",
        std: "28.09745",
      },
    ])
  })
})
