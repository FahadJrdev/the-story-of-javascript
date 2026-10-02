// Node stand-in for the browser's alert(), so 1990s snippets can be run and
// checked here. Not shown on screen. Usage: node run-in-node.js 01-no-privacy-1995.js
global.alert = function (msg) {
  console.log("[alert] " + msg);
};

const path = process.argv[2];
require("./" + path);
