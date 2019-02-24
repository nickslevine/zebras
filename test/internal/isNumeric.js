const assert = require("assert")

const isNumeric = require("../../source/internal/isNumeric").default

describe("isNumeric", () => {
  it("checks if a value is numeric (number or can be parsed as number)", () => {
    assert.strictEqual(isNumeric("dsadsa"), false)
    assert.strictEqual(isNumeric(NaN), false)
    assert.strictEqual(isNumeric("1"), true)
    assert.strictEqual(isNumeric(1), true)
    assert.strictEqual(isNumeric(Infinity), true)
    assert.strictEqual(isNumeric(-Infinity), true)
    assert.strictEqual(isNumeric(-0), true)
    assert.strictEqual(isNumeric(2e64), true)
  })
})
