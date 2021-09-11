import { range } from "ramda"

const assert = require("assert")

const Z = require("../source/index.js")

describe("randomSample", () => {
  it("gets a random sample of n size from a data frame", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "B", value: 2 },
      { label: "C", value: 75 },
    ]
    var counts = { "A": 0, "B": 0, "C": 0 }
    var numTests = 100
    range(0, numTests).forEach(i => {
        counts[Z.randomSample(1, df)[0].label]++
    })
    assert.ok(counts["A"] > 20 && counts["A"] < 46)
    assert.ok(counts["B"] > 20 && counts["B"] < 46)
    assert.ok(counts["C"] > 20 && counts["C"] < 46)
  })
})
