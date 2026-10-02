// The trap: handing a method to a callback (same shape as setTimeout from
// episodes 12-14) calls it PLAIN, with no dot -- rule 2, not rule 1.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.report = function () {
  console.log("I am at (" + this.x + ", " + this.y + ")");
};

var a = new Point(3, 4);

a.report(); // rule 1: called with a dot, on a

setTimeout(a.report, 10); // handed away; setTimeout will call it with no dot

// Run in Node 20: prints
// I am at (3, 4)
// I am at (undefined, undefined)
