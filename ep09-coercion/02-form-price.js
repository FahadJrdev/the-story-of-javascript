// Everything typed into a form box arrives as text (1995)
var price = "20"      // what the shopper typed
var shipping = 5

console.log(price + shipping)       // + sees text, so it glues
console.log(price - shipping)       // - only knows numbers
console.log(price * 2)

// The 1990s trick: take away zero to turn text into a number
console.log((price - 0) + shipping)
