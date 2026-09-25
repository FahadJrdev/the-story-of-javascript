getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getItems(orders[0].id))
  .then((items) => getPrice(items[0].id))
  .then((price) => console.log("Total:", price))
  .catch(handle); // one place for every error
