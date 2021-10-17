import Coupon from "../../src/domain/entity/Coupon";
import Item from "../../src/domain/entity/Item";
import Order from "../../src/domain/entity/Order";
import OrderRepositoryDatabase from "../../src/infra/repository/database/OrderRepositoryDatabase";

test("Save Order in database", async function() {
  const order = new Order("847.903.332-05", new Date("2021-03-02"));
  const item_guitar = new Item(1, "Music", "Guitar", 100, 1, 2, 3, 4);
  const coupon_20_percent = new Coupon("PROMO20", 20, new Date("2029-02-05"));
  order.addItem(item_guitar, 1);
  order.addCoupon(coupon_20_percent);

  const orderRepository = new OrderRepositoryDatabase();
  await expect(orderRepository.saveOrder(order)).resolves.toBe(undefined);
});