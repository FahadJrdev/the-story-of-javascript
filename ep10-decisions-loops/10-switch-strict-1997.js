// switch compares like === (no coercion, remember episode 9)
var choice = "5"

switch (choice) {
  case 5:
    console.log("You picked the number five")
    break
  default:
    console.log("No match: \"5\" is text, 5 is a number")
}
