// queue.js — 1998
// push/pop/splice existed (buggy) in JS 1.2 (1997); Navigator 4.5's JS 1.3
// (Oct 1998) fixed their return values to match what became the ES3 standard.

var queue = ["ticket1", "ticket2"];
queue.push("ticket3");
console.log(queue.length);

console.log(queue.pop());
console.log(queue);
