// the i flag: ignore uppercase or lowercase.

var answer1 = "YES";
var answer2 = "yes";
var answer3 = "Yes please";

var yesPattern = /^yes$/i;

console.log(yesPattern.test(answer1));
console.log(yesPattern.test(answer2));
console.log(yesPattern.test(answer3));
