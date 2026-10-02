// 1996, JavaScript 1.1 (Navigator 3.0): one shared prototype object instead.
// (Same pattern as HOPL Fig. 7, p.17)

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.sum = function (other) {
  return new Point(this.x + other.x, this.y + other.y);
};
Point.prototype.distance = function (other) {
  return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
};

var a = new Point(0, 0);
var b = new Point(3, 4);

console.log(a.distance(b));
console.log(a.sum === b.sum);

// add a method AFTER the objects already exist
Point.prototype.describe = function () {
  return "(" + this.x + ", " + this.y + ")";
};
console.log(a.describe());
