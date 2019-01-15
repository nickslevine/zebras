const assert = require("assert")

const Z = require("../zebras.js")

describe("sum", function() {
  it("sums array of numbers", function() {
    assert.strictEqual(Z.sum([1, 2, 3, 4, 5]), 15)
    assert.strictEqual(Z.sum(["1", "2", "3", "4", "5"]), 15)
    assert.strictEqual(Z.sum([1, 2, "not a number", 4, 5]), 12)
  })
})
