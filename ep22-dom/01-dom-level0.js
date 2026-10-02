// 01-dom-level0.js — 1996
// Netscape Navigator 2 already let a script see PART of the page: forms, images,
// links — and document.write (episode 6). Nobody called it "the DOM" yet.
// This is a stand-in for that real browser object (no browser is used to run this).

var document = {
  forms: [
    {
      name: "signup",
      email: { value: "" }
    }
  ],
  write: function (text) {
    console.log("[page] " + text);
  }
};

document.write("Enter your email:");
document.forms[0].email.value = "ada@example.com";

console.log("form name:", document.forms[0].name);
console.log("email field now holds:", document.forms[0].email.value);
