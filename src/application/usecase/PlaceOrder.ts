import Order from "../../domain/entity/Order";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";

export default class PlaceOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository
    ){
  }
  async execute(input: PlaceOrderInput): Promise<any> {
    const order = new Order(input.cpf);

    for(const orderItem of input.orderItems) {
      const item = await this.itemRepository.findItemById(orderItem.id);
      order.addItem(item, orderItem.quantity)
    }
    this.orderRepository.saveOrder(order)
    return {
      total: order.getTotal()
    }
  }
}
