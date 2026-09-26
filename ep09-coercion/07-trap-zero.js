// The trap: the text "0"
var typed = "0"

console.log(typed == false)     // == turns both into numbers: 0 == 0
console.log(Boolean(typed))     // but a text with something in it counts as true
