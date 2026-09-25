// The browser war in code: one job, written twice (Danny Goodman, Netscape DevEdge, 1997)
var isNav4, isIE4
if (navigator.appVersion.charAt(0) == "4") {
   if (navigator.appName == "Netscape") {
      isNav4 = true
   } else if (navigator.appVersion.indexOf("MSIE") != -1) {
      isIE4 = true
   }
}

if (isNav4) {
   document.layer1.visibility = "hidden"
}
if (isIE4) {
   document.all.layer1.style.visibility = "hidden"
}
