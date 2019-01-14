const assert = require("assert")

const Z = require("../zebras.js")

describe("max", function() {
  it("returns the biggest value in the array", function() {
    assert.strictEqual(Z.max([1, 2, 3, 4, 5]), 5)
    assert.strictEqual(Z.max(["11", "2", "3", "4", "5"]), 11)
    assert.strictEqual(Z.max([1, 2, "not a number", 4, 5]), 5)
  })
})
