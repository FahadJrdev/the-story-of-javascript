// Rule 1: call a method WITH a dot, on an object -> "this" is that object.
// Same Point from episode 17 (its prototype carries the "distance" method).
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.distance = function (other) {
  return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
};

var a = new Point(0, 0);
var b = new Point(3, 4);

console.log(a.distance(b));

// Run in Node 20 (non-strict script, plain `node 01-method-call.js`): prints
// 5
