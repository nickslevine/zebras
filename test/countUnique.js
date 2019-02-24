const assert = require("assert")

const Z = require("../source/index.js")

describe("countUnique", () => {
  it("returns number of unique values in the array", () => {
    assert.deepStrictEqual(Z.countUnique([7, 7, 2, 30, 30, 56, 75]), 5)
  })
})
