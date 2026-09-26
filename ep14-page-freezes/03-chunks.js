// Stir a little, let others go, come back
var total = 300, done = 0
setTimeout(function () { console.log("Click handled!") }, 0)
function nextChunk() {
  var stop = Math.min(done + 100, total)
  while (done < stop) { done = done + 1 }   // stir 100 times
  console.log("Stirred " + done + " of " + total)
  if (done < total) {
    setTimeout(nextChunk, 0)   // back of the line
  } else {
    console.log("Soup is ready")
  }
}
nextChunk()
