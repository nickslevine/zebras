const assert = require("assert")

const Z = require("../zebras.js")

describe("cumulative", function() {
  it("calculates cumulative statistics", function() {
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
