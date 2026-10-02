// Today, we'd usually reach for const instead of var (episode thirty-two
// explains why). The object literal itself hasn't changed since 1997.
const origin = { x: 0, y: 0 };
const away = { x: 3, y: 4 };

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(origin, away));

delete away.y;
console.log(away);
