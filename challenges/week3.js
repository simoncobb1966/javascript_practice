function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
newArray = []
nums.forEach(function(elem){
newArray.push(elem*elem)
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
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
