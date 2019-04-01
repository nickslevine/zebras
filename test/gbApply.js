const assert = require("assert")

const Z = require("../source/index.js")

describe("gbApply", () => {
  it("maps the groups according to the provided function", () => {
    assert.deepStrictEqual(
      Z.gbApply(
        (group, index) => ({
          Day: index,
          value: Z.sum(Z.getCol("value", group)),
        }),
        Z.groupBy(x => x.Day, [
          { Day: "Monday", value: 10 },
          { Day: "Tuesday", value: 5 },
          { Day: "Monday", value: 7 },
        ])
      ),
      [{ Day: "Monday", value: 17 }, { Day: "Tuesday", value: 5 }]
    )
  })
})
