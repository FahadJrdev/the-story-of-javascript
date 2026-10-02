// Episode 14's cliffhanger, answered. bakeReminder finishes and is gone from
// the call stack long before the timer rings. But the function handed to
// setTimeout still remembers "flavor" and "minutes" -- its closure.

function bakeReminder(minutes) {
  var flavor = "chocolate";

  setTimeout(function ringTimer() {
    console.log(flavor + " cake is ready, after " + minutes + " minutes.");
  }, 0);
}

bakeReminder(30);
console.log("bakeReminder has already finished.");
