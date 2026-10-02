// 02-ie4-document-all.js — 1997, Internet Explorer 4 only
// Microsoft's answer to "change the page after it loaded": one giant collection
// called document.all, holding every tagged element by id.
// Stand-in for IE4's real object (no browser is used to run this).

var document = {
  all: {
    headline: { style: {} }
  }
};

document.all.headline.style.color = "red";
document.all.headline.style.display = "none";

console.log("IE4 way -> document.all.headline.style.color:", document.all.headline.style.color);
console.log("IE4 way -> document.all.headline.style.display:", document.all.headline.style.display);
