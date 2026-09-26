// Today we'd write
function showName(user) {
  if (user !== null && typeof user === "object") {
    console.log(user.name);
  }
}
const fahad = { name: "Fahad" };
showName(fahad);
showName(null);
