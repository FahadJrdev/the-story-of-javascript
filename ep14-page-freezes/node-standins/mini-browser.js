// NOT an on-screen snippet. A tiny stand-in for a browser, to test the logic of the
// browser-only demos (01, 04) in Node without opening Chrome.
// Model (WHATWG HTML event loop): run ONE task to completion, then the page may be
// redrawn ("render"), then the next task. Nothing is painted in the middle of a task.
var fs = require("fs"), vm = require("vm")
var file = process.argv[2]
var html = fs.readFileSync(file, "utf8")
var script = html.split(/<script[^>]*>/)[1].split("</script>")[0]
var handler = /onclick="([^"]+)"/.exec(html)[1]
var box = { value: /name="status" value="([^"]+)"/.exec(html)[1] }
var queue = [], painted = []
var t0 = Date.now()
function render() {
  if (painted[painted.length - 1] !== box.value) {
    painted.push(box.value)
    console.log("  paint at " + (Date.now() - t0) + " ms: [" + box.value + "]")
  }
}
var ctx = vm.createContext({
  document: { forms: [{ status: box }] },
  Math: Math, Date: Date,
  setTimeout: function (fn) { queue.push(fn) }
})
vm.runInContext(script, ctx)
render()                                          // first paint: "Ready"
queue.push(function () { vm.runInContext(handler, ctx) })   // the user clicks Start
while (queue.length) { queue.shift()(); render() }          // task, then render
console.log("Everything the user ever saw: " + painted.join(" -> "))
