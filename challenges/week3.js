function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
  newArray = []
  nums.forEach(function (elem) {
    newArray.push(elem * elem)
  })
  nums = newArray
  return nums
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
  //1st deal with first letter of first word
  var result = ""
  result = words[0].charAt(0).toLowerCase() + (words[0].slice(1))
  //2nd deal with remaining words
  for (let i = 1; i < words.length; i++) {
    result = result + words[i].charAt(0).toUpperCase() + (words[i].slice(1))
  }
  return result
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
  var count = 0
  people.forEach(function (elem) {
    count = count + elem.subjects.length
  })
  return count
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  var flag = 0
  menu.forEach(function (elem) {
    flag = flag + (elem.ingredients.indexOf(ingredient) > -1)
  })
  return (flag > 0)
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
  newArray = []
  arr1.forEach(function (elem1) {
    arr2.forEach(function (elem2) {
      if ((elem1 === elem2) && (newArray.indexOf(elem1) === -1)) {
        newArray.push(elem1)
      }
    })
  })
  newArray.sort()
  return newArray
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
