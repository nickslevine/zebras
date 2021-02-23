const assert = require("assert")

const Z = require("../source/index.js")

describe("quantile", () => {
  it("calulates the quantile at a specific value", () => {
    assert.strictEqual(Z.quantile( .95, [7, 2, 30, 56, 75, 150]), 112.5);
    assert.strictEqual(Z.quantile( 0, [7, 2, 30, 56, 75, 150]), 2);
    assert.strictEqual(Math.floor(Z.quantile(.95, [ 5.61011689, 30.33814912,  0.98261763, 35.8447662 ,  7.76692163,
      13.65226782, 14.22137158, 10.10005641, 17.42880858,  6.61134312])), 33)
    assert.throws(() => {Z.percentile( -1, [7, 2, 30, 56, 75, 150])}, Error);

  })
})

