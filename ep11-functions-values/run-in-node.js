// Stand-in for the 1995 browser: alert() becomes a console line, so the snippets run in Node.
// Usage: node run-in-node.js 04-callback-1995.js
globalThis.alert = function (msg) { console.log("[alert] " + msg) }
require("vm").runInThisContext(require("fs").readFileSync(process.argv[2], "utf8"), { filename: process.argv[2] })
