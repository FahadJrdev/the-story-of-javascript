// 06-innerHTML-trick.js — 1997, Microsoft's shortcut (Internet Explorer 4)
// One line instead of five: innerHTML replaces a whole chunk of a page's HTML
// at once. Everybody used it. It was not an official part of any standard
// until HTML5, roughly fifteen years later.
// Stand-in for the real property (no browser is used to run this).

var el = { id: "headline", innerHTML: "<b>Breaking news</b>" };

el.innerHTML = "<b>Still breaking news</b>";

console.log("innerHTML now:", el.innerHTML);
