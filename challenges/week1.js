function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  if (word === "") throw new Error("Null string error");
  //1st check for single word by checking to see if the string doesnt includes a space
  if (!(word.includes(' '))) {return word.charAt(0).toUpperCase() + word.slice(1);}
  //2nd check to see if 1st letter is already a capital
  if (word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91) {return word}
  // checks for sentance
if (word.substring(word.length-1) === ".") {return word.charAt(0).toUpperCase() + word.slice(1)};
  //3rd check for multiple words
let a = []
let b = ""
a = word.split(' ')
a.forEach (function(elem) {
  t = (elem.charAt(0).toUpperCase() + elem.slice(1)) + " "
b = b + t
})
// removes the " " at the end of the last word
let c = b.slice(0, b.length-1)
return c
}



function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  var a
  var t
  t=firstName.slice(0,1)
  a=t.toUpperCase()
  t=lastName.slice(0,1)
  a=a+"."+t.toUpperCase()
  return a
  
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  if (vatRate === 0){return originalPrice}
  a=originalPrice * (1+(vatRate/100))
  a = parseFloat(a).toFixed(2)
  a = Number(a)
  return a

  //var a = parseFloat("10")

  //return Number.parseFloat(x).toFixed(2);
  //var n = num.toFixed(2);
  // Math.round(2.5);
  //var n = num.toString();

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var a
  a = originalPrice - (originalPrice * (reduction/100))
  a = parseFloat(a).toFixed(2)
  a = Number(a)
  return a
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let a = Math.floor(str.length/2)
  if (str.length%2===1) {return str.slice(a,a+1)}
  return str.slice(a-1,a+1)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var a = ""
  var i
  for (i = word.length; i > -1; i--) {
    a=a+(word.slice(i-1,i))
  }
  return a
}



function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
