import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderCode from "./OrderCode";
import OrderItem from "./OrderItem";
export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  private coupon: Coupon | undefined;
  private freight: number;
  private code: OrderCode;

  constructor(cpf: string, readonly issueDate: Date = new Date(), sequence: number = 1) {
    this.cpf = new Cpf(cpf);
    this.orderItems = []
    this.freight = 0;
    this.code = new OrderCode(issueDate, sequence);
  }

  addItem(item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity;
    const order = new OrderItem(item, quantity)
    this.orderItems.push(order);
  }

  addCoupon(coupon: Coupon) {
    if(coupon.isCouponExpired(this.issueDate)) {
      return;
    }
    this.coupon = coupon;
  }

  getFreight() {
    return this.freight.toFixed(2);
  }

  getCode() {
    return this.code.value;
  }

  getCoupon() {
    return this.coupon?.description;
  }

  getTotal(): number {
    var total: number = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotalOrder();
    }
    if (this.coupon && this.coupon.isCouponExpired()) {
      total -= (total*this.coupon.percent) / 100;
    }
    return total;
  }
}