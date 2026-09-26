// Today we'd write (same idea, modern words)
const total = 300
let done = 0
setTimeout(() => console.log("Click handled!"), 0)
function nextChunk() {
  const stop = Math.min(done + 100, total)
  while (done < stop) done++
  console.log(`Stirred ${done} of ${total}`)
  if (done < total) setTimeout(nextChunk, 0)
  else console.log("Soup is ready")
}
nextChunk()
// Really heavy work? A Web Worker: a second kitchen (episode 57)
