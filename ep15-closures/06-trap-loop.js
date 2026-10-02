// The classic closure-in-loop bug (JS: The First 20 Years, HOPL IV, p.111
// describes this exact shape). var is function-scoped, not block-scoped
// (episode seven), so every closure made in this loop shares the SAME "i".
// By the time any of them run, the loop has already finished and i is 3.

function announceWinners(names) {
  for (var i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log("Winner: " + names[i]);
    }, 0);
  }
}

announceWinners(["Ada", "Grace", "Alan"]);
