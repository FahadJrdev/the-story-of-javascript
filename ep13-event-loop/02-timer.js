// A timer: the helper waits, the chef keeps cooking
function later() {
  console.log("Two")
}
console.log("One")
setTimeout(later, 1000)
console.log("Three")
