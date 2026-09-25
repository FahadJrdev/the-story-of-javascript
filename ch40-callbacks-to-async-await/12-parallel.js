// Slow: one after another (3 s + 3 s = 6 s)
const paris = await getWeather("Paris");
const tokyo = await getWeather("Tokyo");

// Fast: both at the same time (3 s)
const [p, t] = await Promise.all([
  getWeather("Paris"),
  getWeather("Tokyo"),
]);
