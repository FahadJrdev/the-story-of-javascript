// 1995 (JS 1.0): functions could only be declared at the top level.
// Every function shares the same global room. Nothing is private.

var score = 0;

function addPoint() {
  score = score + 1;
}

function showScore() {
  alert(score);
}

addPoint();
addPoint();
showScore();

// Anyone, anywhere in the script, can also just write:
score = 9999;
showScore();
