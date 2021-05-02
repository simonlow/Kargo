const { test, expect } = require("@jest/globals")
const stringArray = require("./stringArray")

test('properly changes array to String', () => {
    let arr = [1,1];
    expect(stringArray(arr)).toBe("One,One");
})
test('different single digit numbers', () => {
    expect(stringArray([1,2,3])).toBe("One,Two,Three");
})
test('longer array with multi-digit numbers', () => {
    expect(stringArray([3, 35, 209])).toBe("Three,ThreeFive,TwoZeroNine");
})
test('work example', () => {
    expect(stringArray([10, 300, 5])).toBe("OneZero,ThreeZeroZero,Five");
})