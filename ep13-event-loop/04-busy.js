// The trap: the delay is a minimum, not a promise
var begin = new Date().getTime()
function hello() {
  var late = new Date().getTime() - begin
  console.log("Timer, after " + late + " ms")
}
setTimeout(hello, 0)
var end = begin + 2000
while (new Date().getTime() < end) { }   // the chef is busy
console.log("Loop done")
