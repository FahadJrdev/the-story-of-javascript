// Today we'd write: Function.prototype.bind (ES5, 2009 -- episode 30) locks
// "this" permanently, no matter how the returned function is later called.
// (Arrow functions, 2015 -- episode 33, sidestep the whole problem a
// different way: they never have a "this" of their own to lose.)
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.report = function () {
  console.log("I am at (" + this.x + ", " + this.y + ")");
};

var a = new Point(3, 4);

var reportBound = a.report.bind(a);
setTimeout(reportBound, 10);

// Run in Node 20: prints
// I am at (3, 4)
