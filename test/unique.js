const assert = require("assert")

const Z = require("../zebras.js")

describe("unique", function() {
  it("returns unique values in the array", function() {
    assert.deepStrictEqual(Z.unique([7, 7, 2, 30, 30, 56, 75]), [
      7,
      2,
      30,
      56,
      75,
    ])
  })
})
