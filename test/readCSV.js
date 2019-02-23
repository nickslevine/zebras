const path = require("path")
const assert = require("assert")

const Z = require("../src/index.js")

describe("readCSV", () => {
  it("synchronously reads a CSV file", () => {
    assert.deepStrictEqual(
      Z.readCSV(path.join(__dirname, "data/test_read.csv")),
      [
        { label: "A", value: "1" },
        { label: "B", value: "2" },
        { label: "C", value: "3" },
      ]
    )
  })
  it("gracefully handles failures", () => {
    const r = Z.readCSV(path.join(__dirname, "data/missing_file.csv"))
    assert.strictEqual(typeof r, "object")
    assert.strictEqual(r.code, "ENOENT")
    assert.strictEqual(r.errno, -2)
  })
})
