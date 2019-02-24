const assert = require("assert")

const Z = require("../source/index.js")

describe("getRange", () => {
  it("returns the range of the array", () => {
    assert.deepStrictEqual(Z.getRange([1, 2, 3, 4, 5]), [1, 5])
    assert.deepStrictEqual(Z.getRange(["11", "2", "3", "4", "5"]), [2, 11])
    assert.deepStrictEqual(Z.getRange([1, 2, "not a number", 4, 5]), [1, 5])
  })
})
