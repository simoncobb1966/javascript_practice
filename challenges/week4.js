function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var newArray = []
  nums.forEach(function (elem) {
    if (elem < 1) {
      newArray.push(elem)
    }
  })
  return newArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var newArray = []
  names.forEach(function (elem) {
    if (char === elem.charAt(0)) {
      newArray.push(elem)
    }
  })
  return newArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  newArray = []
  words.forEach(function (elem) {
    if (elem.substring(0, 3) === "to ") {
      newArray.push(elem)
    }
  })
  return newArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  newArray = []
  nums.forEach(function(elem){
    if (Number.isInteger(elem)) {
      newArray.push(elem)
    } 
  })
  return newArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var newArray = []
  users.forEach(function(elem){
    newArray.push(elem.data.city.displayName)
  })

  return newArray
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var newArray = []
  nums.forEach(function(elem){
    newArray.push(Number.parseFloat(Math.sqrt(elem).toFixed(2)))
})
  return newArray
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  var newArray = []
sentences.forEach(function(elem){
  if (elem.toLowerCase().includes(str.toLowerCase())) {
    newArray.push(elem)
  }
})
  return newArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  var newArray = []
  triangles.forEach(function(elem){
    elem.sort(function (a, b) { return b - a });
    newArray.push(elem[0])
  })
  // for (let i = 0; i < triangles.length; i++) {
  //   triangles[i].sort(function (a, b) { return b - a });
  //   newArray.push(triangles[i][0])
  // }
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
