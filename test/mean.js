const assert = require("assert")

const Z = require("../zebras.js")

describe("mean", function() {
  it("returns mean of series", function() {
    assert.strictEqual(Z.mean([7, 2, 30, 56, 75]), 34)
  })
})
