// A tiny hand-built stand-in for the DOM's event flow, since Node has
// no real page. Three nested elements: page -> list -> link, like a
// nav menu. We click the innermost one (the link) and watch the W3C
// three-phase flow: capture DOWN from the top, then bubble UP again.
// This is the same order the W3C DOM Level 2 Events spec (13 Nov 2000)
// describes: "Capture operates from the top of the tree ... downward,
// making it the symmetrical opposite of bubbling."

function makeNode(name, parent) {
  const node = { name, parent, captureListeners: [], bubbleListeners: [] };
  return node;
}

const page = makeNode('page', null);
const list = makeNode('list', page);
const link = makeNode('link', list);

function on(node, phase, fn) {
  if (phase === 'capture') node.captureListeners.push(fn);
  else node.bubbleListeners.push(fn);
}

function dispatch(target, type) {
  // path from the root down to the target, e.g. [page, list, link]
  const path = [];
  for (let n = target; n; n = n.parent) path.unshift(n);

  const event = { type, target, currentTarget: null, phase: '', stopped: false };
  event.stopPropagation = () => { event.stopped = true; };

  // Capture phase: top of the tree downward, stopping before the target.
  event.phase = 'capture';
  for (const node of path.slice(0, -1)) {
    if (event.stopped) return;
    event.currentTarget = node;
    for (const fn of node.captureListeners) fn(event);
  }

  // Target phase: the element itself.
  event.phase = 'target';
  event.currentTarget = target;
  for (const fn of target.captureListeners) fn(event);
  for (const fn of target.bubbleListeners) fn(event);

  // Bubble phase: back up from the target's parent to the top.
  event.phase = 'bubble';
  for (const node of path.slice(0, -1).reverse()) {
    if (event.stopped) return;
    event.currentTarget = node;
    for (const fn of node.bubbleListeners) fn(event);
  }
}

on(page, 'capture', (e) => console.log('capture: page'));
on(list, 'capture', (e) => console.log('capture: list'));
on(link, 'bubble', (e) => console.log('target: link'));
on(list, 'bubble', (e) => console.log('bubble: list'));
on(page, 'bubble', (e) => console.log('bubble: page'));

dispatch(link, 'click');
