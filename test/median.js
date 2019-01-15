const assert = require("assert")

const Z = require("../zebras.js")

describe("median", function() {
  it("returns median of series", function() {
    assert.strictEqual(Z.median([7, 2, 30, 56, 75]), 30)
  })
})
