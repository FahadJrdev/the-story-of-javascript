// From C: braces, if/else, loops, semicolons
var total = 0;
for (var i = 1; i <= 4; i++) {
  if (i % 2 == 0) {
    total = total + i;
  } else {
    total = total - i;
  }
}
console.log(total);
