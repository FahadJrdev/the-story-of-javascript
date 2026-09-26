// A pretend click, waiting while the chef stirs
var start = new Date().getTime()
setTimeout(function () {
  var waited = new Date().getTime() - start
  console.log("Click handled after " + waited + " ms")
}, 0)
console.log("Start stirring")
var end = start + 2000
while (new Date().getTime() < end) { }   // 2 seconds, no breaks
console.log("Done stirring")
