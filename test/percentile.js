const assert = require("assert")

const Z = require("../source/index.js")

describe("percentile", () => {
  it("calulates the percentile at a specific value", () => {
    assert.strictEqual(Z.percentile( .95, [7, 2, 30, 56, 75, 150]), 112.5);
    assert.strictEqual(Z.percentile( 95, [7, 2, 30, 56, 75, 150]), 112.5);
    assert.throws(() => {Z.percentile( -1, [7, 2, 30, 56, 75, 150])}, Error);

  })
})

