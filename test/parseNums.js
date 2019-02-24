const assert = require("assert")

const Z = require("../source/index.js")

describe("parseNums", () => {
  it("converts columns to numerical type (floats)", () => {
    const df = [
      { label: "A", value: "7" },
      { label: "B", value: "-2" },
      { label: "C", value: "75.43" },
    ]
    assert.deepStrictEqual(Z.parseNums(["value"], df), [
      { label: "A", value: 7 },
      { label: "B", value: -2 },
      { label: "C", value: 75.43 },
    ])
  })
})
