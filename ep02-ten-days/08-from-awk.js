// From AWK: the word "function", and "for ... in"
function describe(thing) {
  for (var key in thing) {
    console.log(key + ": " + thing[key]);
  }
}
var page = new Object();
page.title = "My Home Page";
page.year = 1995;
describe(page);
