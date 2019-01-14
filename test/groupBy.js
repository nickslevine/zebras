const assert = require("assert")

const Z = require("../zebras.js")

describe("groupBy", function() {
  it("creates an object grouped by according to the supplied function", function() {
    assert.deepStrictEqual(
      Z.groupBy(x => x.Day, [
        { Day: "Monday", value: 10 },
        { Day: "Tuesday", value: 5 },
        { Day: "Monday", value: 7 },
      ]),
      {
        Monday: [{ Day: "Monday", value: 10 }, { Day: "Monday", value: 7 }],
        Tuesday: [{ Day: "Tuesday", value: 5 }],
      }
    )
  })
})
