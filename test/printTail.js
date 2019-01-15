const path = require("path")
const assert = require("assert")

const Z = require("../zebras.js")

describe("printTail", function() {
  it("prints last n rows of dataframe as an ASCII table", function() {
    const df = [{ label: "C", value: "3" }, { label: "B", value: "2" }]

    assert.strictEqual(
      Z.printTail(1, df),
      "\n\u001b[90m┌───────\u001b[39m\u001b[90m┬───────┐\u001b[39m\n\u001b[90m│\u001b[39m\u001b[31m label \u001b[39m\u001b[90m│\u001b[39m\u001b[31m value \u001b[39m\u001b[90m│\u001b[39m\n\u001b[90m├───────\u001b[39m\u001b[90m┼───────┤\u001b[39m\n\u001b[90m│\u001b[39m B     \u001b[90m│\u001b[39m 2     \u001b[90m│\u001b[39m\n\u001b[90m└───────\u001b[39m\u001b[90m┴───────┘\u001b[39m"
    )
  })
})
