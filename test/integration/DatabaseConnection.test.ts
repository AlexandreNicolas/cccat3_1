import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";

test("create database connection", async function () {
  const db = new DatabaseConnectionAdapter();
  const item = await db.query("select * from ccca.item", [])
  expect(item).toHaveLength(3);
});