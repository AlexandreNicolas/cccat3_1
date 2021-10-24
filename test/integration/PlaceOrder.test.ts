import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import { ItemRepositoryMemory } from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryDatabase from "../../src/infra/repository/database/OrderRepositoryDatabase";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";

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
    ],
    issueDate: new Date("2020-10-09"),
    coupon: "VALE20"
  }
  const databaseConnection = new DatabaseConnectionAdapter();
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryDatabase(databaseConnection);
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(4872);
  expect(output.code).toBe("202000000001");
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
    ],
    issueDate: new Date("2019-03-09"),
    coupon: "VALE20"
  }
  const databaseConnection = new DatabaseConnectionAdapter();
  const itemRepository = new ItemRepositoryDatabase(databaseConnection);
  const orderRepository = new OrderRepositoryDatabase(databaseConnection);
  const couponRepository = new CouponRepositoryDatabase(databaseConnection);
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(4872);
  expect(output.code).toBe("201900000001");
});