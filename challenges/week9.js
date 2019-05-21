/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (arr.length < 2) { throw new Error("array to small") }
  let total = 0
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0) {
      total += n
    }
  })
  return total
}


/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!str) throw new Error("str is required");
  var dna = { C: 0, G: 0, T: 0, A: 0 }
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char === "C") { dna.C = dna.C + 1 }
    if (char === "G") { dna.G = dna.G + 1 }
    if (char === "T") { dna.T = dna.T + 1 }
    if (char === "A") { dna.A = dna.A + 1 }
  }
  let count = dna.C + dna.G + dna.T + dna.A
  return (dna.C > 0 && dna.G > 0 && dna.T > 0 && dna.A > 0 && count === str.length)
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (!str) throw new Error("str is required");
  if (str.length !== 4) { throw new Error("string wrong length") }
  var newString = ""
  for (let i = 0; i < 4; i++) {
    let char = str.charAt(i)
    if (char === "T") { newString = newString + "A" } else
      if (char === "C") { newString = newString + "G" } else
        if (char === "A") { newString = newString + "T" } else
          if (char === "G") { newString = newString + "C" } else
            var errorFlag = 1
  }
  if (errorFlag === 1) { throw new Error("Not valid DNA") }
  return newString
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (!n) throw new Error("n is required");
  if (n < 2) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (let x=2; x<n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}


/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!n) throw new Error("n is required");
  if (n<1) {throw new Error("n is too small")}
  if (!fill) throw new Error("fill is required");
  var result=[]
  for (let i=0; i<n; i++){
result.push(fill)
  }
  const row=result
   result=[]
  for (let i=0; i<n; i++){
     result.push(row)
  }
  return result
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!staff) throw new Error("staff is required");
  if (!day) throw new Error("day is required");
  var names = []
  for (let i=0; i<staff.length; i++){
   var found = staff[i].rota.find(function(element) {
      return element === day;
  })
if (found!=undefined){names.push(found)}
}
return (names.length>2)
}

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
