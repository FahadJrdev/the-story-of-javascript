// Node stand-in for 07-onclick-1995.html: what the browser does with onClick="bakeCake(ringBell)"
function bakeCake(whenDone) {
  alert("Mixing...")
  alert("Baking...")
  whenDone()
}
function ringBell() {
  alert("Ding! The cake is ready")
}
var button = {}
button.onclick = new Function("bakeCake(ringBell)")   // the attribute text becomes a function
button.onclick()                                      // ...called later, when you click
