const assert = require("assert")

const Z = require("../zebras.js")

describe("getRange", function() {
  it("returns the range of the array", function() {
    assert.deepStrictEqual(Z.getRange([1, 2, 3, 4, 5]), [1, 5])
    assert.deepStrictEqual(Z.getRange(["11", "2", "3", "4", "5"]), [2, 11])
    assert.deepStrictEqual(Z.getRange([1, 2, "not a number", 4, 5]), [1, 5])
  })
})
