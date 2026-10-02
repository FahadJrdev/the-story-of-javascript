// shout.js — 1998
// This is how you transformed a whole list, for fourteen more years.

var groceries = ["milk", "eggs", "bread"];
var shouted = [];

for (var i = 0; i < groceries.length; i++) {
  shouted.push(groceries[i].toUpperCase());
}

console.log(shouted);
