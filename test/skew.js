const assert = require("assert")

const Z = require("../zebras.js")

describe("skew", function() {
  it("returns skew of series", function() {
    assert.strictEqual(Z.skew([7, 2, 30, 56, 75]), 0.17542841315728933)
  })
})
