// do...while — 1997: run first, check after
var tries = 10

do {
  console.log("Try number " + tries)
  tries++
} while (tries < 3)

console.log("The body ran once, even though 10 < 3 is false")
