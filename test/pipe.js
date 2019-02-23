const assert = require("assert")

const Z = require("../src/index.js")

describe("pipe", () => {
  it("pipes functions together by performing left-to-right function composition", () => {
    const data = [
      { Date: "1997-01-01", Value: "12" },
      { Date: "1997-01-02", Value: "14" },
      { Date: "1997-01-03", Value: "7" },
      { Date: "1997-01-04", Value: "112" },
    ]

    assert.strictEqual(
      Z.pipe([Z.parseNums(["Value"]), Z.getCol("Value"), Z.mean()])(data),
      36.25
    )
  })
})
