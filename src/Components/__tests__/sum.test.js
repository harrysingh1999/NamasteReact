import { sum } from "../Sum"


test('Sum function should calculate the sum of 2 numbers', () => {

    let result = sum(4,6)
    //  Assertion................
    expect(result).toBe(10)
} )