// 1995 (JavaScript 1.0, Navigator 2.0): there is no {} yet.
// An object starts empty, and you add properties to it one at a time.
var pt = new Object();
pt.x = 0;
pt.y = 0;

// Dot notation, for a name you could type as an identifier:
console.log(pt.x, pt.y);

// Bracket notation works too, and the key can be computed:
console.log(pt["y"]);

var axis = "x";
console.log(pt[axis]);
