export default class Coupon {

  constructor(
    readonly description: string,
    readonly percent: number,
    readonly expiredData?: Date) {
  }

  isCouponExpired(today: Date = new Date()) {
    if (!this.expiredData) return false;
    return this.expiredData.getTime() < today.getTime();
  }

  isValid (today: Date = new Date()) {
		return !this.isCouponExpired(today);
	}
}