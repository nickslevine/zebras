const assert = require("assert")

const Z = require("../zebras.js")

describe("std", function() {
  it("returns standard deviation of series", function() {
    assert.strictEqual(Z.std([7, 2, 30, 56, 75]), 31.36080356113344)
  })
})
