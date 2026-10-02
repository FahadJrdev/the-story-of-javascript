// PART 1 — what "delete" actually did in 1996 (JavaScript 1.1).
// HOPL IV (Wirfs-Brock & Eich, 2020), p.13: "In JavaScript 1.1 the delete
// operator simply sets its variable or object-property operand to the
// value null." It did NOT remove the property. This function recreates
// that documented behavior exactly (Node's real delete is not used here).
function oldDelete(obj, key) {
  obj[key] = null;
}

var old = new Object();
old.x = 0;
old.y = 0;
oldDelete(old, "y");

console.log(old.y);
console.log(typeof old.y);
console.log("y" in old);

// PART 2 — 1997 (JavaScript 1.2, Navigator 4.0): delete was fixed to
// actually remove the property. This is the real delete operator.
var pt = new Object();
pt.x = 0;
pt.y = 0;
delete pt.y;

console.log(pt.y);
console.log(typeof pt.y);
console.log("y" in pt);
