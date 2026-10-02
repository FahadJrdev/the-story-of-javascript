// A common "email-ish" check: something@something.something

var emailPattern = /^\S+@\S+\.\S+$/;

console.log(emailPattern.test("ada@example.com"));

// The trap: this simple pattern is easily fooled.
console.log(emailPattern.test("not-an-email@@..."));  // wrongly passes
console.log(emailPattern.test("ada@example.co.uk"));  // correctly passes
console.log(emailPattern.test("ada.lovelace@@sub.example.com")); // wrongly passes
