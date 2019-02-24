const assert = require("assert")

const Z = require("../source/index.js")

describe("std", () => {
  it("returns standard deviation of series", () => {
    assert.strictEqual(Z.std([7, 2, 30, 56, 75]), 31.36080356113344)
  })
})
