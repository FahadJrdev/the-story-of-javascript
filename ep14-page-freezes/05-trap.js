// The trap: moving the whole pot to "later" doesn't help
var start = new Date().getTime()
function bigJob() {
  var end = new Date().getTime() + 2000
  while (new Date().getTime() < end) { }   // still one giant pot
  console.log("Big job done")
}
setTimeout(bigJob, 0)
setTimeout(function () {
  var waited = new Date().getTime() - start
  console.log("Click handled after " + waited + " ms")
}, 0)
console.log("Script finished")
