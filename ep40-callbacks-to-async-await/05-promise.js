function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const beans = Math.random() > 0.2;
      if (beans) resolve("Coffee ready!");
      else reject(new Error("Out of beans"));
    }, 3000);
  });
}

brewCoffee()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err.message));
