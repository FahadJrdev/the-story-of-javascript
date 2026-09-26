// The name of a function is just a variable. Its value is the function.
function greet(name) {
  return "Hello, " + name + "!"
}

var hello = greet           // no ( ): we copy the card, we don't run it
alert(hello("Netscape"))
alert(typeof greet)          // typeof arrived one year later, in 1996
