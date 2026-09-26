// Pause and predict: what prints first?
function tea() {
  console.log("Tea")
}
function toast() {
  console.log("Toast")
}
setTimeout(tea, 50)
setTimeout(toast, 0)
console.log("Juice")
