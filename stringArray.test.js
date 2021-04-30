const { test } = require("@jest/globals")
const arr = require("./stringArray")

test('properly changes array to String', () => {
    expect(stringArray([1, 1])).toBe([One, One]);
})