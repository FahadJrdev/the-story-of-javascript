const fs = require("fs");

fs.readFile("user.json", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read the file", err);
    return;
  }
  console.log("User:", JSON.parse(data).name);
});
