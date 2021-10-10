import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
export default class Order {
  cpf: Cpf;
  orderItem: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string, readonly issueDate: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItem = []
  }

  addItem(item: Item, quantity: number) {
    const order = new OrderItem(item, quantity)
    this.orderItem.push(order);
  }

  addCoupon(coupon: Coupon) {
    if(coupon.isCouponExpired(this.issueDate)) return;
    this.coupon = coupon;
  }

  getTotal(): number {
    var total: number = 0;
    this.orderItem.forEach(order => {
      total += order.getTotalOrder()
    });
    if (this.coupon && this.coupon.isCouponExpired()) {
      total -= (total*this.coupon.percent) / 100;
    }
    return total;
  }
}