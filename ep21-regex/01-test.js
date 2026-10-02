// 1997: JavaScript 1.2 (Netscape 4) adds regular expression literals.
// A shop's order form only wants a ZIP code: five digits.

var zip = "94043";

var fiveDigits = /^\d\d\d\d\d$/;

console.log("Is '" + zip + "' five digits? " + fiveDigits.test(zip));

var badZip = "9404";
console.log("Is '" + badZip + "' five digits? " + fiveDigits.test(badZip));
