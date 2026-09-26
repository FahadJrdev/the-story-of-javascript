// Node stand-in for 04-ticker-1995.html (NOT shown on screen).
// window.status becomes a printed line; stops after 6 frames.
function setTimeout1995(code, msec) { return setTimeout(function () { eval(code) }, msec) }
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
  if (frames < 6) setTimeout1995("scroll()", 150)
}
scroll()
