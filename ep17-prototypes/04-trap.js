// The trap: the shared object is shared by EVERYTHING, even ones you didn't mean to touch.
Object.prototype.sayHi = function () {
  return "hi!";
};

var order = { item: "soup", price: 6 };

console.log(order.sayHi());          // "inherited" from very far up the chain

for (var key in order) {
  console.log(key);                  // sayHi leaks into a plain loop too
}
