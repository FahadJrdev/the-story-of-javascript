// list.js — 1996
// Navigator 3.0, JavaScript 1.1: Array finally becomes a real, usable object
// (HOPL 2020, p.20). length now grows by itself.

var fruits = new Array("apple", "banana", "cherry");
console.log(fruits.length);
console.log(fruits[1]);

fruits[3] = "date";
console.log(fruits.length);
