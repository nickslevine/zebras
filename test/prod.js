const assert = require("assert")

const Z = require("../zebras.js")

describe("prod", function() {
  it("multplies array of numbers", function() {
    assert.strictEqual(Z.prod([1, 2, 3, 4, 5]), 120)
    assert.strictEqual(Z.prod(["1", "2", "3", "4", "5"]), 120)
    assert.strictEqual(Z.prod([1, 2, "not a number", 4, 5]), 40)
  })
})
