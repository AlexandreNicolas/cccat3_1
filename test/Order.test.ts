import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Criar pedido com cpf válido", function() {
  const order = new Order("847.903.332-05");
  expect(order).toBeDefined()
});

test("Adicionando 3 item no pedido", function() {
  const order = new Order("847.903.332-05");
  const item_guitar = new Item(1, "Music", "Guitar", 120.12);
  const item_baixo = new Item(2, "Music", "Baixo", 200);
  const item_amplifier = new Item(3, "Music", "Amplifier", 50);
  order.addItem(item_guitar, 1);
  order.addItem(item_baixo, 2);
  order.addItem(item_amplifier, 3);
  const total_order = order.getTotal();
  expect(total_order).toBe(670.12)
});

test("Add coupon in the order", function() {
  const order = new Order("847.903.332-05");
  const item_guitar = new Item(1, "Music", "Guitar", 100);
  const coupon_20_percent = new Coupon("PROMO20", 20);
  order.addItem(item_guitar, 1);
  order.addCoupon(coupon_20_percent)
  const total_order = order.getTotal();
  expect(total_order).toBe(80);
});