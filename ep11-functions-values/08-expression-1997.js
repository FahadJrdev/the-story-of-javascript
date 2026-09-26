// JavaScript 1.2 (Netscape 4, 1997): a function with no name, used as a value
bakeCake(function () {
  alert("Ding! The cake is ready")
})

function bakeCake(whenDone) {     // a declaration: hoisted, usable before this line
  alert("Mixing...")
  alert("Baking...")
  whenDone()
}

alert(typeof later)                // the var is hoisted, the function is not
var later = function () { alert("I exist now") }
later()
