// 1996 (JavaScript 1.1, Navigator 3.0): a constructor function builds the bag
// and attaches methods to it directly. No classes. Every instance gets its
// own copy of the method property (sharing one copy is next episode's story).
function ptSum(other) {
  return new Point(this.x + other.x, this.y + other.y);
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.sum = ptSum;
}

var a = new Point(1, 2);
var b = new Point(3, 4);
var c = a.sum(b);

console.log(c.x, c.y);
