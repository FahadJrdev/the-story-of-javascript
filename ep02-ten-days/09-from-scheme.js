// From Scheme: a function is a value, like a number
function addOne(n) {
  return n + 1;
}
function twice(f, x) {
  return f(f(x));
}
console.log(twice(addOne, 5));
