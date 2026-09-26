// Node stand-in for 02-reminder-1995.html (NOT shown on screen).
// Node's setTimeout refuses strings, so this wrapper does what Navigator 2 did:
// keep the TEXT of the code, and evaluate it later.
function setTimeout1995(code, msec) {
  return setTimeout(function () { eval(code) }, msec)
}
function alert(msg) { console.log("[alert] " + msg) }
function displayAlert() {
  alert("5 seconds have elapsed since the button was clicked.")
}
var start = Date.now()
var timerID = setTimeout1995("displayAlert()", 5000)   // click "5-second reminder"
console.log("Button clicked. The script keeps going.")
var timerID2 = setTimeout1995("displayAlert()", 5000)  // a second reminder...
clearTimeout(timerID2)                                  // ...cancelled before it fires
setTimeout(function () { console.log("elapsed ms: " + (Date.now() - start)) }, 5010)
