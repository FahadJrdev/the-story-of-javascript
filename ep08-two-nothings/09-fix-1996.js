// the 1996 fix: rule out null first
function showName(user) {
  if (user != null && typeof user == "object") {
    console.log(user.name)
  }
}
var fahad = new Object()
fahad.name = "Fahad"
showName(fahad)
showName(null)
console.log("no crash")
