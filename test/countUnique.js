const assert = require("assert")

const Z = require("../zebras.js")

describe("countUnique", function() {
  it("returns number of unique values in the array", function() {
    assert.deepStrictEqual(Z.countUnique([7, 7, 2, 30, 30, 56, 75]), 5)
  })
})
