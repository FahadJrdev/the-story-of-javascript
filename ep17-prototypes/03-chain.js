// The secret parent link, one step at a time.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.describe = function () {
  return "(" + this.x + ", " + this.y + ")";
};

var a = new Point(3, 4);

console.log(a.x);
console.log(a.describe());
console.log(a.toString());          // not on Point, not on Point.prototype...
console.log(a.__proto__ === Point.prototype);
console.log(Point.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
