const path = require("path")
const assert = require("assert")

const Z = require("../zebras.js")

describe("readCSV", function() {
  it("synchronously reads a CSV file", function() {
    assert.deepStrictEqual(
      Z.readCSV(path.join(__dirname, "data/test_read.csv")),
      [
        { label: "A", value: "1" },
        { label: "B", value: "2" },
        { label: "C", value: "3" },
      ]
    )
  })
})
