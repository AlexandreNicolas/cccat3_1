import Order from "../../domain/entity/Order";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrderOutputAssembler {

  static assembler (order: Order) {
    const total = order.getTotal();
    return new PlaceOrderOutput(order.getCode(), total)
  }
}