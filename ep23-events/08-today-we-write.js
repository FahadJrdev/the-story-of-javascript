// "Today we'd write" -- the modern split screen. One standard way,
// same in every browser: addEventListener(type, listener, useCapture).
// true = run during the capture phase (top down), false/omitted = the
// bubble phase (bottom up), the one almost everyone uses.
//
// Node's built-in EventTarget doesn't model a page's parent/child tree
// (there's no "page" to climb), so this tiny MiniEventTarget stands in
// for a real element, wired the same way 04's dispatcher was.

class MiniEventTarget {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent || null;
    this.captureListeners = [];
    this.bubbleListeners = [];
  }
  addEventListener(type, fn, useCapture) {
    (useCapture ? this.captureListeners : this.bubbleListeners).push(fn);
  }
  dispatchEvent(type) {
    const path = [];
    for (let n = this; n; n = n.parent) path.unshift(n);
    for (const node of path.slice(0, -1)) {
      for (const fn of node.captureListeners) fn();
    }
    for (const fn of this.captureListeners) fn();
    for (const fn of this.bubbleListeners) fn();
    for (const node of path.slice(0, -1).reverse()) {
      for (const fn of node.bubbleListeners) fn();
    }
  }
}

const list = new MiniEventTarget('list', null);
const link = new MiniEventTarget('link', list);

list.addEventListener('click', () => console.log('list heard it in the capture phase'), true);
list.addEventListener('click', () => console.log('list heard it in the bubble phase'), false);

link.dispatchEvent('click'); // clicking the link inside the list
