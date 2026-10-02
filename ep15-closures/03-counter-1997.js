// The counter. makeCounter returns its inner function, but the inner
// function still remembers "count" -- even after makeCounter has finished.
// This is a closure.

function makeCounter() {
  var count = 0;

  function increment() {
    count = count + 1;
    return count;
  }

  return increment;
}

var counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
