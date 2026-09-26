// tab: oops.js — 1995 trap, run as a Node stand-in
// Netscape's reference warned: "The expression must be quoted; otherwise, setTimeout calls it immediately."
function setTimeout1995(code, msec) { return setTimeout(function () { eval(String(code)) }, msec) }
function ring() { console.log("Ding!"); return undefined }
console.log("Set the timer for two seconds...")
setTimeout1995(ring(), 2000)     // no quotes: ring() runs NOW, the note gets its result
console.log("...timer set.")
