// seats.js — 1997
// The trap: length is always (highest index used) + 1, not "how many items I put in".

var seats = [];
seats[10] = "reserved";
console.log(seats.length);
console.log(seats);
