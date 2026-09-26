// trap.js — 1996: "if it's an object, it's safe to use"... right?
function showName(user) {
  if (typeof user == "object") {
    console.log(user.name)
  }
}
var fahad = new Object()
fahad.name = "Fahad"
showName(fahad)
showName(null)
