// match() pulls the matching piece out, instead of just yes/no.

var order = "Please send 3 lamps and 12 chairs";

var firstNumber = order.match(/\d+/);

console.log(firstNumber[0]);

// the g flag: find every match, not just the first
var allNumbers = order.match(/\d+/g);

console.log(allNumbers);
