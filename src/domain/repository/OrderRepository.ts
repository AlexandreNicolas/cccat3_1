import Order from "../entity/Order";

export default interface OrderRepository {
  saveOrder(order: Order): void;
}
