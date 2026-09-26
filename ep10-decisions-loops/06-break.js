// track.js — 1995: leave the track early
for (var lap = 1; lap <= 10; lap++) {
  if (lap == 4) {
    console.log("Too tired! Stopping at lap " + lap)
    break
  }
  console.log("Lap " + lap)
}
