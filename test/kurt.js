const assert = require("assert")

const Z = require("../zebras.js")

describe("kurt", function() {
  it("returns kurtosis of series", function() {
    assert.strictEqual(Z.kurt([7, 2, 30, 56, 75]), -2.040541067936147)
  })
})
