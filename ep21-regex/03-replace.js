// replace() swaps the matched text for something else.

var card = "Card number: 4111 1111 1111 1234";

var masked = card.replace(/\d/g, "*");

console.log(masked);
