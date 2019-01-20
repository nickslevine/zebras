const assert = require("assert")

const Z = require("../zebras.js")

describe("sum", () => {
  it("sums array of numbers", () => {
    assert.strictEqual(Z.sum([1, 2, 3, 4, 5]), 15)
    assert.strictEqual(Z.sum(["1", "2", "3", "4", "5"]), 15)
    assert.strictEqual(Z.sum([1, 2, "not a number", 4, 5]), 12)
  })
})
