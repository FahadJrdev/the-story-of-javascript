// Today we'd write the counter with an arrow function (episode thirty-three)
// and fix the loop trap with let (episode thirty-two): let gives each pass
// through the loop its own fresh "i", so each closure gets its own copy.

function makeCounter() {
  let count = 0;
  const increment = () => {
    count = count + 1;
    return count;
  };
  return increment;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());

function announceWinners(names) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(() => {
      console.log("Winner: " + names[i]);
    }, 0);
  }
}

announceWinners(["Ada", "Grace", "Alan"]);
