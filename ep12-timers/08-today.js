// tab: today.js — today we'd write (left: 1995 string; right: today)
// 1995:  setTimeout("showMessage()", 1000)
// today: hand over the function itself (no string to be read like eval)
function showMessage() { console.log("One second later") }
var id = setTimeout(showMessage, 1000)
// and for animation in a browser today: requestAnimationFrame(draw)  (browser-only, not run here)
// and window.status? The HTML standard now says setting it has no effect on the status bar.
