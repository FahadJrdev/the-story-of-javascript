// for...in — 1995 (objects get their own episode: 16)
var pet = new Object()
pet.name = "Rex"
pet.sound = "Woof"

for (var key in pet) {
  console.log(key + " = " + pet[key])
}
