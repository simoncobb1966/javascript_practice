const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test.only("it adds all of the digits together and returns the total", () => {
        var result = sumDigits(123)
        var expected = 6
        expect(result).toBe(expected)
        result = sumDigits(89127364)
        expected = 40
        expect(result).toBe(expected)
    })
    test.only("Throws an error if parameter is not a whole number", () => {
        expect(() => {
            sumDigits(84.2);
        }).toThrow("n is not a positive whole integer")
        expect(() => {
            sumDigits(-768);
        }).toThrow("n is not a positive whole integer")
        expect(() => {
            sumDigits();
        }).toThrow("n is required")
    })
})
describe("createRange", () => {
    test.only("creates a range of number starting with start and ending with end with a step of step", () => {
        var result = createRange(3, 11, 2)
        var expected = [3, 5, 7, 9, 11]
        expect(result).toEqual(expected)
        result = createRange(0, 50, 10)
        expected = [0, 10, 20, 30, 40, 50]
        expect(result).toEqual(expected)
        result = createRange(100, 500, 100)
        expected = [100, 200, 300, 400, 500]
        expect(result).toEqual(expected)
    })
    test.only("creates a range of number starting with start and ending with end with a step of step", () => {
        expect(() => {
            createRange(3, 11, -2);
        }).toThrow("step must be positive")
        expect(() => {
            createRange(110, 11, 2);
        }).toThrow("start is > end")
        expect(() => {
            createRange(37);
        }).toThrow("end is required")
    })
})
describe("getScreentimeAlertList", () => {
    test.only("from supplied data & date, users with over 100 hours screentime per day are retuned", () => {
        var result = getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ],
            "2019-05-04"
        )
        var expected = ["Beth Smith"]
        expect(result).toEqual(expected)

        result = getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 82, whatsApp: 23, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ],
            "2019-06-11"
        )
        expected = ["Sam Jones"]
        expect(result).toEqual(expected)

        result = getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 82, whatsApp: 23, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-05-04", usage: { mapMyRun: 89, whatsApp: 30, facebook: 0, safari: 31 } },
                    ]
                },
            ],
            "2019-05-04"
        )
        expected = ["Beth Smith", "Sam Jones"]
        expect(result).toEqual(expected)
    })
    test.only("from supplied data & date, users with over 100 hours screentime per day are retuned", () => {
        expect(() => {
            getScreentimeAlertList(32);
        }).toThrow("date is required")

    })
})
describe("hexToRGB", () => {
    test.only("converts 6 digit hex value to RGB decimal", () => {
        var result = hexToRGB("818283")
        var expected = 'rgb(129,130,131)'
        expect(result).toBe(expected)
        result = hexToRGB("24a69d")
        expected = 'rgb(36,166,157)'
        expect(result).toBe(expected)
        result = hexToRGB("f00de1")
        expected = 'rgb(240,13,225)'
        expect(result).toBe(expected)
    })
    test.only("converts 6 digit hex value to RGB decimal", () => {
        expect(() => {
            hexToRGB("f00dHH");
        }).toThrow("Not a valid hex number")
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required")
    })
})
describe("findWinner", () => {
    test.only("Checks to see who has won noughts & crosses", () => {
        var result = findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])
        var expected = "X"
        expect(result).toBe(expected)
    })
    test.only("Checks to see who has won noughts & crosses", () => {
        var result = findWinner([
            [null, "0", null],
            ["X", null, "0"],
            ["0", "0", "0"]
        ])
        var expected = "0"
        expect(result).toBe(expected)
    })
    test.only("Checks to see who has won noughts & crosses", () => {
        var result = findWinner([
            ["X", "0", null],
            ["X", "X", "0"],
            ["0", "0", "X"]
        ])
        var expected = "X"
        expect(result).toBe(expected)
    })
    test.only("Checks to see who has won noughts & crosses", () => {
        var result = findWinner([
            [null, "0", "0"],
            ["X", "0", "0"],
            ["0", "X", "X"]
        ])
        var expected = "0"
        expect(result).toBe(expected)
    })
    test.only("Checks to see who has won noughts & crosses", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required")
    })
})
