// The trap: ringBell() with brackets runs it NOW, and passes its result
function bakeCake(whenDone) {
  alert("Mixing...")
  alert("Baking...")
  whenDone()
}

function ringBell() {
  alert("Ding! The cake is ready")
}

bakeCake(ringBell())         // oops: ( ) means "run it right now"
