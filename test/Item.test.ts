import Item from "../src/Item";

test("Create Item", function() {
  const item = new Item(1, "Category", "Tipo", 1000.23);
  expect(item).toBeDefined();
});