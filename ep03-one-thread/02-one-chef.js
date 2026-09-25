// One chef: each step waits for the one before it
function cook(dish, seconds) {
  var end = new Date().getTime() + seconds * 1000
  while (new Date().getTime() < end) { }   // the chef is busy
  console.log(dish + " is ready")
}
console.log("Orders: soup, salad")
cook("Soup", 2)
cook("Salad", 1)
console.log("All done")
