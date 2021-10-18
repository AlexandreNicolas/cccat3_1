
import Order from "../../src/domain/entity/Order";

test("Create code of Order", function () {
  const order = new Order("847.903.332-05", new Date("2021-10-01"));
  const code = order.getCode();
  expect(code).toBe("202100000001")
});