import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
  orders: Order[]
  constructor() {
    this.orders = []
  }

  saveOrder(order: Order): void {
    this.orders.push(order);
  }
}
