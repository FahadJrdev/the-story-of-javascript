function waitFor(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {} // everything freezes here
}

console.log("Ordering coffee...");
waitFor(3000);
console.log("Coffee ready!");
