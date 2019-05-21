const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5])
        const expected = 8
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
describe("isValidDNA", () => {
    test("returns true/false if string contains the chars C, G , A & T", () => {
        const result = isValidDNA("GCATTAACG")
        const expected = true
        expect(result).toBe(expected)
    })
    test("returns true/false if string contains the chars C, G , A & T", () => {
        const result = isValidDNA("YECBTARTU")
        const expected = false
        expect(result).toBe(expected)
    })
    test("returns true/false if string contains the chars C, G , A & T", () => {
        const result = isValidDNA("AGC")
        const expected = false
        expect(result).toBe(expected)
    })
    test("Throws an error if not a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required")
})
})

describe("isValidDNA", () => {
    test("returns true/false if string contains the chars C, G , A & T", () => {
        const result = isValidDNA("ACTG")
        const expected = true
        expect(result).toBe(expected)
    })
})


describe("getComplementaryDNA", () => {
    test("returns complimentary base pairs of DNA from a string", () => {
        const result = getComplementaryDNA("ACTG")
        const expected = "TGAC"
        expect(result).toBe(expected)
    })
    test("returns complimentary base pairs of DNA from a string", () => {
        const result = getComplementaryDNA("GACT")
        const expected = "CTGA"
        expect(result).toBe(expected)
    })
    test("throws an error if not a valid DNA string", () => {
        expect(() => {
            getComplementaryDNA("BACT")
        }).toThrow("Not valid DNA")
    })
})


describe("isItPrime", () => {
    test("returns true/false if number is a prime number or not", () => {
        const result = isItPrime(1)
        const expected = false
        expect(result).toBe(expected)
    })
    test("returns true/false if number is a prime number or not", () => {
        const result = isItPrime(2)
        const expected = true
        expect(result).toBe(expected)
    })
    test("returns true/false if number is a prime number or not", () => {
        const result = isItPrime(51)
        const expected = false
        expect(result).toBe(expected)
    })
    test("returns true/false if number is a prime number or not", () => {
        const result = isItPrime(27)
        const expected = false
        expect(result).toBe(expected)
    })
    test("returns true/false if number is a prime number or not", () => {
        const result = isItPrime(-9)
        const expected = false
        expect(result).toBe(expected)
    })
        test("returns true/false if number is a prime number or not", () => {
            const result = isItPrime(17)
            const expected = true
            expect(result).toBe(expected)
        })
    })


    describe("createMatrix", () => {
        test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
            const result = createMatrix(3,"foo")
            const expected = [["foo", "foo", "foo"],
               ["foo", "foo", "foo"],
               ["foo", "foo", "foo"]
             ]
            expect(result).toEqual(expected)
        })

        test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
            const result = createMatrix(6,"foo")
            const expected = [["foo", "foo", "foo","foo", "foo", "foo"],
            ["foo", "foo", "foo","foo", "foo", "foo"],
            ["foo", "foo", "foo","foo", "foo", "foo"],
            ["foo", "foo", "foo","foo", "foo", "foo"],
            ["foo", "foo", "foo","foo", "foo", "foo"],
            ["foo", "foo", "foo","foo", "foo", "foo"]
             ]
            expect(result).toEqual(expected)
        })
        test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
            expect(() => {
                createMatrix(-1,"foo")
            }).toThrow("n is too small")
        })

        test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
            expect(() => {
                createMatrix("foo")
            }).toThrow("fill is required")
        })
        test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
            expect(() => {
                createMatrix()
            }).toThrow("n is required")
        })
       
    })

        describe("areWeCovered", () => {
            test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
                const result = areWeCovered([
                {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Friday"]}, 
                { name: "Pedro", rota: ["Saturday", "Sunday", "Monday", "Wednesday, Thursday"]}, 
                { name: "Stan", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"]}, 
                { name: "Bob", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]}], "Tuesday")
                const expected = true
                expect(result).toBe(expected)
            })
            test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
                const result = areWeCovered([
                {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Friday"]}, 
                { name: "Pedro", rota: ["Saturday", "Sunday", "Monday", "Wednesday", "Thursday"]}, 
                { name: "Stan", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"]}, 
                { name: "Bob", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]}], "Thursday")
                const expected = false
                expect(result).toBe(expected)
            })
            test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
                const result = areWeCovered([
                {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Friday"]}, 
                { name: "Pedro", rota: ["Saturday", "Sunday", "Monday", "Wednesday", "Thursday"]}, 
                { name: "Stan", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"]}, 
                { name: "Bob", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]}], "Thursday")
                const expected = false
                expect(result).toBe(expected)
            })
            test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
                expect(() => {
                    areWeCovered([
                        {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday","Friday"]}, 
                        { name: "Pedro", rota: ["Saturday", "Sunday", "Monday", "Wednesday", "Thursday"]}, 
                        { name: "Stan", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"]}, 
                        { name: "Bob", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]}])
                }).toThrow("day is required")
            })
            test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays", () => {
                expect(() => {
                    areWeCovered()
                
                }).toThrow("staff is required")
            })
        })
