// csv.js — 1996
// split existed in 1.0 but was "not operational or buggy" (HOPL 2020, p.19);
// it started working properly in JavaScript 1.1, Navigator 3.0.

var csv = "Ana,Bo,Chen";
var names = csv.split(",");

console.log(names);
console.log(names.length);
