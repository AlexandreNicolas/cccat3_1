export default class Item {
  distance: number
  constructor(
    readonly idItem: number,
    readonly category: string,
    readonly description: string,
    readonly price: number,
    readonly width: number,
    readonly height: number,
    readonly length: number,
    readonly weight: number,
    ){
      this.distance = 1000;
    }

  getVolume () {
    return this.width/100 * this.height/100 * this.length/100;
  }

  getDensity () {
      return this.weight/this.getVolume();
  }

  getFreight(): number {
    const freight = this.distance * this.getVolume() * this.getDensity()
    return (freight < 10) ? 10 : freight
  }
}