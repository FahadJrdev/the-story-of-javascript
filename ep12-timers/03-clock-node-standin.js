// Node stand-in for 03-clock-1995.html (NOT shown on screen). Stops after 3 ticks.
function setTimeout1995(code, msec) { return setTimeout(function () { eval(code) }, msec) }
var ticks = 0
function showtime() {
  var now = new Date()
  console.log("clock face: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
  ticks = ticks + 1
  if (ticks < 3) timerID = setTimeout1995("showtime()", 1000)
}
var timerID = null
showtime()
