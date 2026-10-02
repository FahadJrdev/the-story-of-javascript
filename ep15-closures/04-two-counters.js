// Two counters made from the same factory function each get their OWN
// private count. Private state: nothing outside can reach in and change it
// except through the door the closure leaves open.

function makeCounter() {
  var count = 0;

  function increment() {
    count = count + 1;
    return count;
  }

  return increment;
}

var counterA = makeCounter();
var counterB = makeCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterA());
