// Rule 4: choose "this" yourself, on purpose, with call/apply.
// Netscape shipped these on Function.prototype in JavaScript 1.3 (Navigator
// 4.5, 1998); ECMA-262 3rd edition (Dec 1999), section 15.3.4.3-4, then wrote
// them into the official standard. ES1 (June 1997), section 15.3.4, has NO
// call or apply at all -- only .constructor and .toString() existed yet.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.distance = function (other) {
  return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
};

var a = new Point(0, 0);
var b = new Point(3, 4);
var origin = new Point(0, 0);

var distance = a.distance;

console.log(distance.call(a, b));          // this = a, chosen on purpose
console.log(distance.apply(origin, [b]));  // this = origin; arguments in an array

// Run in Node 20: prints
// 5
// 5
