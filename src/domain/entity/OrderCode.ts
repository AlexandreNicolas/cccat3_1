export default class OrderCode {
  value: string
  
  constructor(readonly date: Date, readonly sequence: number) {
    if(!sequence || !(typeof sequence == "number")) throw new Error("Invalid parameter");
    const year = date.getFullYear();
    const sequence8char = `${sequence}`.padStart(8, "0");
    this.value = `${year}${sequence8char}`;
  }
}