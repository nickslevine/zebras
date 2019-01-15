const assert = require("assert")

const Z = require("../zebras.js")

describe("rolling", function() {
  it("calculates rolling statistics", function() {
    assert.deepStrictEqual(Z.rolling(Z.mean, 2, [7, 2, 30, 30, 56, 75]), [
      "NotANumber",
      4.5,
      16,
      30,
      43,
      65.5,
    ])
  })
})
