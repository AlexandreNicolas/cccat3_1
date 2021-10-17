import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
export default class Order {
  cpf: Cpf;
  orderItem: OrderItem[];
  coupon: Coupon | undefined;
  freight: number;
  code: string;

  constructor(cpf: string, readonly issueDate: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItem = []
    this.freight = 0;
    this.code = "AAAAPPPPPPPP"
  }

  addItem(item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity;
    const order = new OrderItem(item, quantity)
    this.orderItem.push(order);
  }

  addCoupon(coupon: Coupon) {
    if(coupon.isCouponExpired(this.issueDate)) return;
    this.coupon = coupon;
  }

  getFreight() {
    return this.freight.toFixed(2);
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