import Coupon from "../entity/Coupon";

export default interface couponRepository {
  findByCode(code: string): Promise<Coupon>;
}