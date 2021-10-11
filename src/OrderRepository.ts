import Order from "./Order";


export default interface OrderRepository {
  saveOrder(order: Order): void;
}
