// finally always runs, whether the trick was caught or not.
// Like taking down the safety net after the show, every single time.

function walkTheWire() {
    try {
        console.log("Walking the tightrope...");
        throw new Error("Slipped!");
    } catch (e) {
        console.log("Caught: " + e.message);
    } finally {
        console.log("Taking down the net.");
    }
}

walkTheWire();
