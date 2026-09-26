// Today we'd write (arrow functions, 2015: episode thirty-three)
function bakeCake(whenDone) {
  console.log("Mixing...")
  console.log("Baking...")
  whenDone()
}

bakeCake(() => console.log("Ding! The cake is ready"))

const add = (a, b) => a + b
console.log(add(3, 4))
