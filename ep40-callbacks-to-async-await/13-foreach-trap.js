// Trap: forEach does NOT wait for async callbacks
ids.forEach(async (id) => {
  await save(id);
});
console.log("Done?"); // prints before anything is saved!

// Fix: for...of waits for each one
for (const id of ids) {
  await save(id);
}
console.log("Really done");
