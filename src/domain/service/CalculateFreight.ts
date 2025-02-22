import Item from "../entity/Item"

export default class CalculateFreight {

  static calculate(item: Item): number {
    const freight = 1000 * item.getVolume() * (item.getDensity()/100);
    return (freight < 10) ? 10 : freight;
  }
}