import DatabaseConnectionAdapter from "../../database/DatabaseConnectionAdapter";
import OrderRepository from "../../../domain/repository/OrderRepository";
import Order from "../../../domain/entity/Order";

export default class OrderRepositoryDatabase implements OrderRepository{
  databaseConnection: DatabaseConnectionAdapter;

  constructor() {
    this.databaseConnection = new DatabaseConnectionAdapter();
  }

  async saveOrder(order: Order): Promise<void> {
    await this.databaseConnection.query("insert into \
      ccca.order (coupon, code, cpf, issue_date, freight) \
      values ($1, $2, $3, $4, $5)", 
      [order.coupon, order.code, order.cpf.value, order.issueDate, order.freight]);
  }
}