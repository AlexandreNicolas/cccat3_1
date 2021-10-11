import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
  orders: Order[]
  constructor() {
    this.orders = []
  }

  saveOrder(order: Order): void {
    this.orders.push(order);
  }
}
