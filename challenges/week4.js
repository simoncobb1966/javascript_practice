function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArray = nums.filter(function (elem) {
    if (elem < 1) {
      return true
    } else {
      return false
    }
  })
  return newArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const newArray = names.filter(function (elem) {
    if (char === elem.charAt(0)) {
      return true
    } else {
      return false
    }
  })
  return newArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const newArray = words.filter(function (elem) {
    if (elem.substring(0, 3) === "to ") {
      return true
    } else {
      return false
    }
  })
  return newArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArray = nums.filter(function (elem) {
    if (Number.isInteger(elem)) {
      return true
    } else {
      return false
    }
  })
  return newArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const newArray = users.map(function (elem) {
    return elem.data.city.displayName
  })
  return newArray
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArray = nums.map(function (elem) {
    return Number.parseFloat(Math.sqrt(elem).toFixed(2))
  })
  return newArray
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const newArray = sentences.filter(function (elem) {
    if (elem.toLowerCase().includes(str.toLowerCase())) {
      return true
    } else {
      return false
    }
  })
  return newArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const newArray = triangles.map(function (elem) {
    var temp = elem.sort(function (a, b) { return b - a })
    return temp[0]
  })
  return newArray
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
