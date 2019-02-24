const assert = require("assert")

const Z = require("../source/index.js")

describe("skew", () => {
  it("returns skew of series", () => {
    assert.strictEqual(Z.skew([7, 2, 30, 56, 75]), 0.17542841315728933)
  })
})
