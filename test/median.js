const assert = require("assert")

const Z = require("../zebras.js")

describe("median", () => {
  it("returns median of series", () => {
    assert.strictEqual(Z.median([7, 2, 30, 56, 75]), 30)
  })
})
