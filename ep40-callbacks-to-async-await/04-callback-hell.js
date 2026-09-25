getUser(1, (err, user) => {
  if (err) return handle(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handle(err);
    getItems(orders[0].id, (err, items) => {
      if (err) return handle(err);
      getPrice(items[0].id, (err, price) => {
        if (err) return handle(err);
        console.log("Total:", price);
      });
    });
  });
});
