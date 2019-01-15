const assert = require("assert")

const Z = require("../zebras.js")

describe("min", function() {
  it("returns the smallest value in the array", function() {
    assert.strictEqual(Z.min([1, 2, 3, 4, 5]), 1)
    assert.strictEqual(Z.min(["11", "2", "3", "4", "5"]), 2)
    assert.strictEqual(Z.min([1, 2, "not a number", 4, 5]), 1)
  })
})
