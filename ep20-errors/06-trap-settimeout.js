// THE TRAP. The try block only watches code running RIGHT NOW.
// A setTimeout callback runs later, off the task queue (episode 13),
// long after the try block already finished. Its net is gone.

try {
    setTimeout(function () {
        throw new Error("Boom, later");
    }, 100);
} catch (e) {
    console.log("Caught? " + e.message);
}

console.log("Script continues");
