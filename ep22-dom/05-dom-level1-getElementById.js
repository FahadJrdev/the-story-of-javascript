// 05-dom-level1-getElementById.js — 1 October 1998
// The W3C's own Document Object Model Level 1 became a Recommendation on this
// date. getElementById lived in its HTML part; two years later, DOM Level 2
// Core (2000) gave the same method to the plain document tree too.
// Stand-in for the standardised object (no browser is used to run this).

function makeElement(id, tagName, text) {
  return {
    id: id,
    tagName: tagName,
    style: {},
    firstChild: { nodeValue: text }
  };
}

var headline = makeElement("headline", "H1", "Breaking news");
var pageById = { headline: headline };

function getElementById(id) {
  return pageById[id];
}

var el = getElementById("headline");
el.style.color = "red";
el.firstChild.nodeValue = "Still breaking news";

console.log("id:", el.id);
console.log("style.color:", el.style.color);
console.log("text:", el.firstChild.nodeValue);
