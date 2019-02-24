const assert = require("assert")

const Z = require("../source/index.js")

describe("mean", () => {
  it("returns mean of series", () => {
    assert.strictEqual(Z.mean([7, 2, 30, 56, 75]), 34)
  })
})
