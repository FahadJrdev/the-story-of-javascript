// IE5 (1999) offered its own fix for the "only one onclick" problem:
// attachEvent. Real IE-only API (no useCapture, bubble order only, and
// famously called handlers in a random order) -- stood in here as a
// plain method, since Node has no attachEvent. Shows the one thing it
// got right: more than one handler could listen at once.

function makeIEButton() {
  const handlers = [];
  return {
    attachEvent(type, fn) { handlers.push(fn); },
    fireEvent() { for (const fn of handlers) fn(); },
  };
}

const button = makeIEButton();

button.attachEvent('onclick', () => console.log('Show the price'));
button.attachEvent('onclick', () => console.log('Add to cart'));

button.fireEvent();
