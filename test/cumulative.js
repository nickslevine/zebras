const assert = require("assert")

const Z = require("../source/index.js")

describe("cumulative", () => {
  it("calculates cumulative statistics", () => {
    const series = [7, 2, 30, 30, 56, 75]
    assert.deepStrictEqual(Z.cumulative(Z.mean, series), [
      7,
      4.5,
      13,
      17.25,
      25,
      33.333333333333336,
    ])
  })
})
