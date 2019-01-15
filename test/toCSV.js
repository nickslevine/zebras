const path = require("path")
const assert = require("assert")

const Z = require("../zebras.js")

describe("toCSV", function() {
  it("synchronously writes a CSV file", function() {
    const df = [
      { label: "C", value: "3" },
      { label: "B", value: "2" },
      { label: "A", value: "1" },
    ]
    Z.toCSV(path.join(__dirname, "data/test_write.csv"), df)
    assert.deepStrictEqual(
      Z.readCSV(path.join(__dirname, "data/test_write.csv")),
      df
    )
  })
})
