// Browser: no var inside the function, so it escapes to window
function setHighScore() {
  highScore = 100
}
setHighScore()
alert(highScore)
alert(window.highScore)
