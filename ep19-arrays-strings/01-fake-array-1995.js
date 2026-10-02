// list.js — 1995
// JavaScript 1.0 had a built-in Array constructor, but it barely worked:
// objects made with it did not even get a real length property (HOPL 2020, p.15).
// So people rolled their own "array" out of a plain object.

function makeList() {
  var list = new Object();
  list.length = arguments.length;
  for (var i = 0; i < arguments.length; i++) {
    list[i] = arguments[i];
  }
  return list;
}

var fruits = makeList("apple", "banana", "cherry");
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
