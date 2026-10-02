// Today we'd write let/const (episode 32). The safety net itself,
// try/catch/finally, is exactly what was standardized in 1999.

let user = null;

try {
    console.log(user.name);
} catch (e) {
    console.log("Caught it: " + e.message);
}
