const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //   var newArray=[]
  // for (let i=0; i<nums.length; i++){
  //   if (nums[i]===n) {newArray.push(i)
  //   }
  //   if (newArray.length>1) return nums[1+newArray[0]]
  // }

  var a = nums.indexOf(n);
  if (a === nums.length - 1) { return null }

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var zeros = 0
  var ones = 0
  for (let i = 0; i < str.length; i++) {
    let t = str.slice(i, i + 1)
    if (t === "0") { zeros = zeros + 1 }
    if (t === "1") { ones = ones + 1 }
  }
  return { 1: ones, 0: zeros }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var string = n.toString()
  var newString = ""
  for (let i = string.length - 1; i > -1; i--) {
    newString = newString + string.slice(i, i + 1)
  }
  return Number(newString)
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var total = 0
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      total = total + arrs[i][j]
    }
  }
  return total
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) { return arr }
  let first = arr[0]
  arr[0] = arr[arr.length - 1]
  arr[arr.length - 1] = first
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  var array = Object.values(haystack)
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      var n = array[i].toUpperCase().indexOf(searchTerm.toUpperCase())
      if (n > -1) { return true }
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var object = {}
  var array = str.split(" ");
  var length = array.length
  for (let i = 0; i < length; i++) {
    var cmp = array[i].toLowerCase().replace(/\W/g, '')
    var count = 0
    for (let j = 0; j < length; j++) {
      var cmp1 = array[j].toLowerCase().replace(/\W/g, '')
      if (cmp === cmp1) {
        count = count + 1
      }
    }
    object[cmp] = count
  }
  return object
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
