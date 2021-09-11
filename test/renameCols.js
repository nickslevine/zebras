const assert = require("assert")

const Z = require("../source/index.js")

describe("renameCols", () => {
  it("renames columns", () => {
    const df = [
      { label: "A", value: 10, date: "2010-12-13" },
      { label: "B", value: 13, date: "2010-12-15" },
      { label: "C", value: 15, date: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.renameCols({label: "name", value: "quantity"}, df), [
      { name: "A", quantity: 10, date: "2010-12-13" },
      { name: "B", quantity: 13, date: "2010-12-15" },
      { name: "C", quantity: 15, date: "2010-12-17" },
    ])
  })
})
