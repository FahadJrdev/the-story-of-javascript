// shout.js — today
// map() arrived in ES5, 2009 (episode thirty). Arrow functions: episode thirty-three.

const groceries = ["milk", "eggs", "bread"];
const shouted = groceries.map(item => item.toUpperCase());

console.log(shouted);
