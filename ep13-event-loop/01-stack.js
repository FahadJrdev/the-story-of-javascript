// The call stack: who is cooking right now?
function greet(name) {
  console.log("Hello, " + name)
}
function start() {
  greet("Ada")
  console.log("Done")
}
start()
