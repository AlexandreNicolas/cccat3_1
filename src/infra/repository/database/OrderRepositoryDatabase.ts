import DatabaseConnectionAdapter from "../../database/DatabaseConnectionAdapter";
import OrderRepository from "../../../domain/repository/OrderRepository";
import Order from "../../../domain/entity/Order";

export default class OrderRepositoryDatabase implements OrderRepository{

  constructor( readonly databaseConnection = new DatabaseConnectionAdapter()){
  }

  async saveOrder(order: Order): Promise<void> {
    await this.databaseConnection.query("insert into \
      ccca.order (coupon, code, cpf, issue_date, freight) \
      values ($1, $2, $3, $4, $5)", 
      [order.getCoupon(), order.getCode(), order.cpf.value, order.issueDate, order.freight]);
  }
}