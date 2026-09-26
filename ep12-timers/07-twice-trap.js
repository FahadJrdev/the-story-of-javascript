// tab: trap.js — 1997: the Start button clicked twice
var msg = "HELLO   "
var pos = 0
var moves = 0
var tickerID = null
function scroll() {
  pos = pos + 1               // move the message one letter
  if (pos > msg.length) pos = 0
  moves = moves + 1
}
function start() { tickerID = setInterval(scroll, 100) }
function stop() { clearInterval(tickerID) }

start()   // click
start()   // click again: a SECOND timer. tickerID now remembers only the second one.
setTimeout(function () {
  console.log("moves in one second: " + moves)
  stop()                      // stops only the second timer
  var before = moves
  setTimeout(function () {
    console.log("moves in the second AFTER Stop: " + (moves - before))
    process.exit(0)           // (Node only: end the demo)
  }, 1000)
}, 1050)
