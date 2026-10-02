// 04-write-it-twice.js — 1997
// The real shape of the problem: one task, written twice, guarded by feature
// detection, because neither company's object model existed in the other's
// browser. Run this file with WHICH_BROWSER=netscape and again with
// WHICH_BROWSER=microsoft to see both real paths execute.

var document = {};
if (process.env.WHICH_BROWSER === "netscape") {
  document.layers = { headline: { visibility: "show" } };
} else {
  document.all = { headline: { style: {} } };
}

function hideHeadline() {
  if (document.layers) {
    document.layers.headline.visibility = "hide";
    console.log("ran the Netscape branch: visibility =", document.layers.headline.visibility);
  } else if (document.all) {
    document.all.headline.style.display = "none";
    console.log("ran the Microsoft branch: display =", document.all.headline.style.display);
  } else {
    console.log("neither API existed in this browser");
  }
}

hideHeadline();
