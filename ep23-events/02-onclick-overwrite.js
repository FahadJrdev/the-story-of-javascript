// The trap hiding inside the 1995 model: onclick is a PROPERTY.
// A property can only hold one value. Assign it twice, and the second
// assignment silently throws away the first. Stand-in for a real
// <button>, since Node has no DOM: same behaviour, same bug.

const button = {};

button.onclick = function () {
  console.log('Show the price');
};

button.onclick = function () {
  console.log('Add to cart');
};

// A real click just calls whatever onclick currently points to:
button.onclick();
