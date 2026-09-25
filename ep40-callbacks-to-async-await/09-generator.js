function* showTotal() {
  const user = yield getUser(1);
  const orders = yield getOrders(user.id);
  return orders.length;
}

// A tiny "runner" (like the co library) waited for
// each promise and fed the result back in with next()
