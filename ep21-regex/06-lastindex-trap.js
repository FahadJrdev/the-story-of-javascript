// The g-flag + test() trap: a regex object with the g flag REMEMBERS
// where it left off, in a property called lastIndex.

var hasDigit = /\d/g;

var word = "room 7";

console.log(hasDigit.test(word)); // true, found the 7, lastIndex moves past it
console.log(hasDigit.test(word)); // false! it resumes searching AFTER the 7, finds nothing
console.log(hasDigit.test(word)); // true again: lastIndex reset to 0 after the miss
