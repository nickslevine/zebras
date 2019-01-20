const assert = require("assert")

const Z = require("../zebras.js")

describe("diff", () => {
  it("calculates differences between values in the order of the input series", () => {
    assert.deepStrictEqual(Z.diff([7, 2, 30, 30, 56, 75]), [
      NaN,
      -5,
      28,
      0,
      26,
      19,
    ])
    assert.deepStrictEqual(Z.diff([0]), [NaN])
    assert.deepStrictEqual(Z.diff([0, "not a number"]), [NaN, NaN])
    assert.deepStrictEqual(Z.diff([0, "not a number", 1, 3]), [
      NaN,
      NaN,
      NaN,
      2,
    ])
  })
})
