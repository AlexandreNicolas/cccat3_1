import Item from "../src/Item";
import OrderItem from "../src/OrderItem";

test("Create Order of items", function () {
  const guitarItem = new Item(1, "Music", "Guitar", 200);
  const orderItem = new OrderItem(guitarItem, 2);
  const totalOrder = orderItem.getTotalOrder(); 
  expect(totalOrder).toBe(400);
});
