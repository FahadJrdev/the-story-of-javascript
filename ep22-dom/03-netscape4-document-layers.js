// 03-netscape4-document-layers.js — 1997, Netscape Navigator 4 only
// Netscape's answer to the very same problem: document.layers, one entry per
// <LAYER> tag on the page, each acting like its own tiny document.
// Stand-in for Navigator 4's real object (no browser is used to run this).

var document = {
  layers: {
    headline: { visibility: "show", left: 0 }
  }
};

document.layers.headline.visibility = "hide";
document.layers.headline.left = 40;

console.log("Netscape 4 way -> document.layers.headline.visibility:", document.layers.headline.visibility);
console.log("Netscape 4 way -> document.layers.headline.left:", document.layers.headline.left);
