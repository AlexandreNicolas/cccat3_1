import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Criar pedido com cpf válido", function() {
  const order = new Order("847.903.332-05");
  expect(order).toBeDefined()
});

test("Adicionando 3 item no pedido", function() {
  const order = new Order("847.903.332-05");
  const item_guitar = new Item(1, "Music", "Guitar", 120.12, 1, 2, 3, 4);
  const item_baixo = new Item(2, "Music", "Baixo", 200, 1, 2, 3, 4);
  const item_amplifier = new Item(3, "Music", "Amplifier", 50, 1, 2, 3, 4);
  order.addItem(item_guitar, 1);
  order.addItem(item_baixo, 2);
  order.addItem(item_amplifier, 3);
  const total_order = order.getTotal();
  expect(total_order).toBe(670.12)
});

test("Add coupon in the order", function() {
  const order = new Order("847.903.332-05", new Date("2021-05-03"));
  const item_guitar = new Item(1, "Music", "Guitar", 100, 1, 2, 3, 4);
  const coupon_20_percent = new Coupon("PROMO20", 20, new Date("2021-06-06"));
  order.addItem(item_guitar, 1);
  order.addCoupon(coupon_20_percent)
  const total_order = order.getTotal();
  expect(total_order).toBe(80);
});

test("Add coupon expired in the order", function () {
  const order = new Order("847.903.332-05", new Date("2021-03-02"));
  const item_guitar = new Item(1, "Music", "Guitar", 100, 1, 2, 3, 4);
  const coupon_20_percent = new Coupon("PROMO20", 20, new Date("2021-02-05"));
  order.addItem(item_guitar, 1);
  order.addCoupon(coupon_20_percent)
  const total_order = order.getTotal();
  expect(total_order).toBe(100);
  
})

test("Calcule freight of order", function () {
  const order = new Order("847.903.332-05", new Date("2021-09-09"));
  const item_drums = new Item(1, "Music", "Drums", 500, 1.5, 1.5, 1.5, 2);
  order.addItem(item_drums, 1);
  const freight = order.getFreight();
  const expectedFreight = 2000;
  expect(freight).toBe(expectedFreight.toFixed(2));

})