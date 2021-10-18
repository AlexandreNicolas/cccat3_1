import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";


test("Deve validar o cupom de desconto", async function () {
	const databaseConnection = new DatabaseConnectionAdapter()
	const couponRepository = new CouponRepositoryDatabase(databaseConnection);
	const coupon = await couponRepository.findByCode("VALE20");
	const isValid = await coupon.isValid(new Date("2019-03-09"))
	expect(isValid).toBeTruthy();
});

test("Deve invalidar o cupom de desconto", async function () {
	const databaseConnection = new DatabaseConnectionAdapter()
	const couponRepository = new CouponRepositoryDatabase(databaseConnection);
	const coupon = await couponRepository.findByCode("VALE20");
	const isValid = await coupon.isValid(new Date("2022-03-09"))
	expect(isValid).toBeFalsy();
});
