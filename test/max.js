const assert = require("assert")

const Z = require("../src/index.js")

describe("max", () => {
  it("returns the biggest value in the array", () => {
    assert.strictEqual(Z.max([1, 2, 3, 4, 5]), 5)
    assert.strictEqual(Z.max(["11", "2", "3", "4", "5"]), 11)
    assert.strictEqual(Z.max([1, 2, "not a number", 4, 5]), 5)
  })
})
