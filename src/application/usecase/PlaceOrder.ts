import Order from "../../domain/entity/Order";
import couponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";

export default class PlaceOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: couponRepository
    ){
  }
  async execute(input: PlaceOrderInput): Promise<any> {
    const order = new Order(input.cpf, input.issueDate);

    for(const orderItem of input.orderItems) {
      const item = await this.itemRepository.findItemById(orderItem.id);
      order.addItem(item, orderItem.quantity)
    }
    if(input.coupon) {
      const coupon = await this.couponRepository.findByCode(input.coupon);
      order.addCoupon(coupon);
    }
    this.orderRepository.saveOrder(order)
    return {
      total: order.getTotal()
    }
  }
}
