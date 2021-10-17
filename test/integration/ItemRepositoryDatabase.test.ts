import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";

test("Find Item in database", async function() {
  const itemRepository = new ItemRepositoryDatabase();
  const idItem = 1;
  const item = await itemRepository.findItemById(idItem);
  expect(item.description).toBe("Guitarra");
});
