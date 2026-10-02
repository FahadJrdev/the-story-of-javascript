// Same broken line. This time it is wrapped in a safety net: try/catch.

var user = null;

try {
    console.log("Before");
    console.log(user.name);
    console.log("This never runs");
} catch (e) {
    console.log("Caught it: " + e.message);
}

console.log("After");
