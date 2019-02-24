const assert = require("assert")

const Z = require("../source/index.js")

describe("unique", () => {
  it("returns unique values in the array", () => {
    assert.deepStrictEqual(Z.unique([7, 7, 2, 30, 30, 56, 75]), [
      7,
      2,
      30,
      56,
      75,
    ])
  })
})
