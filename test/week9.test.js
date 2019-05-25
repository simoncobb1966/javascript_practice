const {
    sumDigits,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumDigits", () => {
    test.only("it adds all of the digits together and returns the total", () => {
        const result = sumDigits(123)
        const expected = 6
        expect(result).toBe(expected)
    })
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5, 12, 30, 40])
        const expected = 90
        expect(result).toBe(expected)
    })
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 3.8, -12, 0, 5, 12, 30, 40])
        const expected = 78
        expect(result).toBe(expected)
    })
    test("Throws an error if not an arrray", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required")
    })
    test("Throws an error if less than 2 items in array", () => {
        expect(() => {
            sumMultiples([2]);
        }).toThrow("array to small")
    })
})
