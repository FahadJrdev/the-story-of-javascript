// Two ways of finding out WHAT got clicked.
// W3C model: the browser hands the listener an event object; read .target.
// IE's model (IE4 bubbling, then attachEvent in IE5, 1999): nothing is
// passed in. The handler reaches out to a single shared spot instead,
// "window.event". Stood in here with one shared variable, since Node has
// no window.

function w3cHandler(event) {
  console.log('W3C way, event.target is:', event.target.name);
}
w3cHandler({ target: { name: 'link' } });

// --- the IE way ---
let windowDotEvent = null; // stands in for the real window.event

function runIEHandler(fakeEvent, handler) {
  windowDotEvent = fakeEvent; // the browser fills this in before calling
  handler();
  windowDotEvent = null;
}

function ieHandler() {
  console.log('IE way, window.event.srcElement is:', windowDotEvent.srcElement.name);
}
runIEHandler({ srcElement: { name: 'link' } }, ieHandler);
