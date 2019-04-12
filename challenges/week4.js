function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  newArray=[]
  for (let i=0; i<nums.length; i++){
if (nums[i] < 1) {
  newArray.push(nums[i])
}
  }
  return newArray
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  newArray=[]
  for (i=0; i<names.length; i++){
    if (char===names[i].charAt(0)){
      newArray.push(names[i])
    }
  }
  return newArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  newArray=[]
  for (let i=0; i<words.length; i++){
    if (words[i].substring(0,3) === "to ") {
      newArray.push(words[i])
    }
  }
  return newArray
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  newArray=[]
  for (let i=0; i<nums.length; i++)
  if (Number.isInteger(nums[i])){
    newArray.push(nums[i])
  }
  return newArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  newArray=[]
  for (let i=0; i<users.length; i++){
    newArray.push(users[i].data.city.displayName)
  }
  return newArray
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  newArray=[]
  for (let i = 0; i<nums.length; i++){
    newArray.push(Number.parseFloat(Math.sqrt(nums[i]).toFixed(2)))
  }
  return newArray
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  newArray=[]
  for (let i=0; i<sentences.length; i++)
  if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
    newArray.push(sentences[i])
  }
  //var n = str.includes("world");
  return newArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  var newArray=[]
  for (let i=0; i<triangles.length; i++) {
    triangles[i].sort(function(a, b){return b - a});
    newArray.push(triangles[i][0])
  }
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
