import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import { ItemRepositoryMemory } from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryDatabase from "../../src/infra/repository/database/OrderRepositoryDatabase";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";

test("Place Order by memory", async function() {
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

test("Place Order get and save by database", async function() {
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
  const itemRepository = new ItemRepositoryDatabase();
  const orderRepository = new OrderRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(6090);
});