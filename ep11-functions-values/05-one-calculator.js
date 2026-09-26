// One function, many jobs: the job is passed in as a value
function calculate(a, b, operation) {
  return operation(a, b)
}

function add(a, b)      { return a + b }
function multiply(a, b) { return a * b }

alert(calculate(3, 4, add))
alert(calculate(3, 4, multiply))
