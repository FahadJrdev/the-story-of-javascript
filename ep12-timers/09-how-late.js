// tab: late.js (run today in Node 24): how late is "zero"?
var start = Date.now()
setTimeout(function () {
  console.log("asked for 0 ms, waited about " + (Date.now() - start) + " ms")
}, 0)
var end = Date.now() + 50
while (Date.now() < end) { }   // keep the chef busy for 50 ms
console.log("busy work done after " + (Date.now() - start) + " ms")
