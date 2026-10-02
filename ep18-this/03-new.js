// Rule 3 (recap from episode 17): call a function with "new" in front ->
// JavaScript builds a brand-new, empty object and hands THAT in as "this".
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var a = new Point(3, 4);
console.log(a.x, a.y);

// Run in Node 20: prints
// 3 4
