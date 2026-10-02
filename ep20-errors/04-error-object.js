// Every caught error is an Error object with two properties: name and message.

var user = null;

try {
    console.log(user.name);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
