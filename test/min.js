const assert = require("assert")

const Z = require("../src/index.js")

describe("min", () => {
  it("returns the smallest value in the array", () => {
    assert.strictEqual(Z.min([1, 2, 3, 4, 5]), 1)
    assert.strictEqual(Z.min(["11", "2", "3", "4", "5"]), 2)
    assert.strictEqual(Z.min([1, 2, "not a number", 4, 5]), 1)
  })
})
