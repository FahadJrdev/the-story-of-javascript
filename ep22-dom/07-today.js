// 07-today.js — modern JavaScript
// ILLUSTRATIVE ONLY: this needs a real page in a real browser, so it was not
// executed (this episode's build rule: no browser, no jsdom install).
// querySelector: Selectors API Level 1, W3C Recommendation, 21 Feb 2013
// (episode ~48+ territory). textContent: DOM Level 3 Core, W3C
// Recommendation, 7 April 2004.

const el = document.querySelector("#headline");
el.style.color = "red";
el.textContent = "Still breaking news";
