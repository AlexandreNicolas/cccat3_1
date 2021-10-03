import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
export default class Order {
  cpf: Cpf;
  orderItem: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItem = []
  }

  addItem(item: Item, quantity: number) {
    const order = new OrderItem(item, quantity)
    this.orderItem.push(order);
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getTotal(): number {
    var total: number = 0;
    this.orderItem.forEach(order => {
      total += order.getTotalOrder()
    });
    if (this.coupon) {
      total -= (total*this.coupon.percent) / 100;
    }
    return total;
  }
}