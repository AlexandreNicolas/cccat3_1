import Item from "../../src/domain/entity/Item";
import OrderItem from "../../src/domain/entity/OrderItem";

test("Create Order of items", function () {
  const guitarItem = new Item(1, "Music", "Guitar", 200, 1, 2, 3, 4);
  const orderItem = new OrderItem(guitarItem, 2);
  const totalOrder = orderItem.getTotalOrder(); 
  expect(totalOrder).toBe(400);
});
