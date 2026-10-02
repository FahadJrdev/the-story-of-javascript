// 1997 (JavaScript 1.2, Navigator 4.0): the object literal arrives.
// Write the whole bag at once, methods included, in one expression.
var origin = {
  x: 0,
  y: 0,
  distance: function (other) {
    var dx = this.x - other.x;
    var dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
};

var away = { x: 3, y: 4 };

console.log(origin.distance(away));
