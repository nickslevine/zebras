const assert = require("assert")

const Z = require("../zebras.js")

describe("rolling", () => {
  it("calculates rolling statistics", () => {
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
