// 1995, JavaScript 1.0 style: every instance gets its OWN copies, written by hand,
// inside the constructor. (Same pattern as HOPL Fig. 6, Wirfs-Brock & Eich 2020, p.16)

function ptSum(other) {
  return new Point(this.x + other.x, this.y + other.y);
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  // every single object repeats this line at creation time
  this.sum = ptSum;
}

var a = new Point(0, 0);
var b = new Point(3, 4);

console.log(a.sum(b).x, a.sum(b).y);

// Now say we want EVERY point to also describe itself.
// There is no shared place to add it. We can only change the constructor...
function ptDescribe() {
  return "(" + this.x + ", " + this.y + ")";
}
Point = function (x, y) {
  this.x = x;
  this.y = y;
  this.sum = ptSum;
  this.describe = ptDescribe;
};

var c = new Point(1, 1); // made with the NEW constructor: has describe
console.log(c.describe());

console.log(typeof a.describe); // a and b were made BEFORE the change: nothing arrived
