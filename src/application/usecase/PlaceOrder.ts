import Order from "../../domain/entity/Order";
import couponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";
import PlaceOrderOutput from "../dto/PlaceOrderOutput";
import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export default class PlaceOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: couponRepository
    ){
  }
  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
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
    const output = PlaceOrderOutputAssembler.assembler(order);
    return output;
  }
}
