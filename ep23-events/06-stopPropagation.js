// Reuses the same tiny DOM stand-in as 04, this time the list's bubble
// listener calls event.stopPropagation(): the click stops climbing, so
// the page's own bubble listener never fires. Only the target and list
// print.

function makeNode(name, parent) {
  return { name, parent, captureListeners: [], bubbleListeners: [] };
}

const page = makeNode('page', null);
const list = makeNode('list', page);
const link = makeNode('link', list);

function on(node, phase, fn) {
  if (phase === 'capture') node.captureListeners.push(fn);
  else node.bubbleListeners.push(fn);
}

function dispatch(target, type) {
  const path = [];
  for (let n = target; n; n = n.parent) path.unshift(n);

  const event = { type, target, stopped: false };
  event.stopPropagation = () => { event.stopped = true; };

  for (const node of path.slice(0, -1)) {
    if (event.stopped) return;
    for (const fn of node.captureListeners) fn(event);
  }
  for (const fn of target.captureListeners) fn(event);
  for (const fn of target.bubbleListeners) fn(event);
  for (const node of path.slice(0, -1).reverse()) {
    if (event.stopped) return;
    for (const fn of node.bubbleListeners) fn(event);
  }
}

on(link, 'bubble', (e) => {
  console.log('link: menu opened');
});
on(list, 'bubble', (e) => {
  console.log('list: stopping it here');
  e.stopPropagation();
});
on(page, 'bubble', (e) => {
  console.log('page: closing every open menu'); // never runs
});

dispatch(link, 'click');
