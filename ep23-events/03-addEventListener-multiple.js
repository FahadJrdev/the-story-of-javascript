// The W3C fix (DOM Level 2 Events, 13 Nov 2000): addEventListener.
// It doesn't set a property, it ADDS to a list. Many listeners can
// share one click. Node ships the same EventTarget/addEventListener
// the browser uses, so this is the real API, not a stand-in.

const button = new EventTarget();

button.addEventListener('click', () => {
  console.log('Show the price');
});

button.addEventListener('click', () => {
  console.log('Add to cart');
});

button.dispatchEvent(new Event('click'));
