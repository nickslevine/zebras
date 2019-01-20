const assert = require("assert")

const Z = require("../zebras.js")

describe("kurt", () => {
  it("returns kurtosis of series", () => {
    assert.strictEqual(Z.kurt([7, 2, 30, 56, 75]), -2.040541067936147)
  })
})
