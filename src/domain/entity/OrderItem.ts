import Item from "./Item";

export default class OrderItem {

  constructor(readonly item: Item, readonly quantity: number) {
  }

  getTotalOrder() {
    return this.item.price * this.quantity
  }
}