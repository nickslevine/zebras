const assert = require("assert")

const Z = require("../source/index.js")

describe("qcut", () => {
  it("calulates the quantile at a specific value", () => {
    assert.deepStrictEqual(Z.valueCounts(Z.qcut( 5, [...Array(100).keys()])), {
        "0":20, "1":20,"2":20, "3":20, "4":20
    });
    assert.throws(() => Z.qcut( 3, [5,5,5,5,6,6,6,6]), RangeError );
    assert.throws(() => Z.qcut( 1, [5,5,5,5,6,6,6,6]), RangeError );
    assert.deepStrictEqual(Z.qcut( 3, [5,5,5,5,6,6,6,6], false), [0,0,0,0,1,1,1,1]);
  })
})

