const path = require("path")
const assert = require("assert")

const Z = require("../source/index.js")

describe("toCSV", () => {
  const df = [
    { label: "C", value: "3" },
    { label: "B", value: "2" },
    { label: "A", value: "1" },
  ]
  it("synchronously writes a CSV file", () => {
    Z.toCSV(path.join(__dirname, "data/test_write.csv"), df)
    assert.deepStrictEqual(
      Z.readCSV(path.join(__dirname, "data/test_write.csv")),
      df
    )
  })
  it("gracefully handles failures", () => {
    const r = Z.toCSV(path.join(__dirname, "missing_dir/missing_file.csv"), df)
    assert.strictEqual(typeof r, "object")
    assert.strictEqual(r.code, "ENOENT")
    assert.strictEqual(r.errno, -2)
  })
})
