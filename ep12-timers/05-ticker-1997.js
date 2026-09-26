// tab: ticker.js — 1997 (JavaScript 1.2, Navigator 4: setInterval + passing a function)
// In Node, window.status is a stand-in object; we stop after 6 frames.
var window = { status: "" }
var msg = "Welcome to my home page!   "
var pos = 0
var frames = 0
function scroll() {
  window.status = msg.substring(pos, msg.length) + msg.substring(0, pos)
  console.log("[status bar] " + window.status + "|")
  pos = pos + 1
  if (pos > msg.length) pos = 0
  frames = frames + 1
  if (frames == 6) clearInterval(tickerID)   // stop the repeating timer
}
var tickerID = setInterval(scroll, 150)       // no quotes: we hand over the function itself
