// Rule 2: call the SAME function with no dot, no owner in front -> "this" is
// the global object. (ES3, Dec 1999, section 15.3.4.4: "If thisArg is null or
// undefined, the called function is passed the global object as the this
// value" -- true for a plain call too, not only for .call()/.apply().)
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.distance = function (other) {
  return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
};

var a = new Point(0, 0);
var b = new Point(3, 4);

// Pull the exact same function out of the object, into a plain variable.
var distance = a.distance;

console.log(distance(b));

// Run in Node 20 (non-strict script): prints
// NaN
//
// Node note: in a plain (non-strict) function call, "this" is the global
// object in Node too (global, same idea as "window" in a 1995 browser) --
// checked separately: (function () { return this; })() === global -> true.
// Node's per-file module wrapper only changes what "this" is at the very TOP
// of a file (there it's module.exports, not global); it does not change this
// rule for an ordinary function call like the one above.
