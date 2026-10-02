// The trap: JavaScript never complains about a typo in a property name.
var user = { name: "Ada", age: 30 };

user.agee = 31; // meant to update "age" — this quietly creates a NEW property

console.log(user.age);
console.log(user.agee);

for (var key in user) {
  console.log(key);
}
