// Handing a recipe card to someone else: a callback
function bakeCake(whenDone) {
  alert("Mixing...")
  alert("Baking...")
  whenDone()                 // "call me back when you're done"
}

function ringBell() {
  alert("Ding! The cake is ready")
}

bakeCake(ringBell)
