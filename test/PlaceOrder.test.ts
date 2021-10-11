import PlaceOrder from "../src/PlaceOrder";
import { ItemRepositoryMemory } from "../src/ItemRepositoryMemory";
import OrderRepositoryMemory from "../src/OrderRepositoryMemory";

test("Place Order", async function() {
  const input = {
    cpf: "847.903.332-05",
    orderItems: [
      {
        id: 1,
        quantity: 1
      },
      {
        id: 2,
        quantity: 1
      },
      {
        id: 3,
        quantity: 3
      }
    ]
  }
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(470.12);
});
