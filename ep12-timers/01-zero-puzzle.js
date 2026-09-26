// tab: zero.js (run today in the console / Node 24)
// The puzzle: we ask for zero milliseconds. Watch the order.
console.log("Start")
setTimeout(function () {
  console.log("Timer")
}, 0)
console.log("End")
