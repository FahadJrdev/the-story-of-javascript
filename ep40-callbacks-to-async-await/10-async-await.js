async function showTotal() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const items = await getItems(orders[0].id);
    const price = await getPrice(items[0].id);
    console.log("Total:", price);
  } catch (err) {
    handle(err);
  }
}
