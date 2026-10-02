// 1997 (JS 1.2, Netscape 4): a function can now be nested inside another
// function. The inner function can read the outer function's variables.

function bakeCake() {
  var flavor = "chocolate";

  function announce() {
    console.log("The " + flavor + " cake is ready.");
  }

  announce();
}

bakeCake();
