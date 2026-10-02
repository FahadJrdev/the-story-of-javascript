// Today we'd write (ES6 classes, 2015 -- episode thirty-six): same prototype chain underneath.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance(other) {
    return Math.sqrt((other.x - this.x) ** 2 + (other.y - this.y) ** 2);
  }
}

const a = new Point(0, 0);
const b = new Point(3, 4);

console.log(a.distance(b));
console.log(Object.getPrototypeOf(a) === Point.prototype);
