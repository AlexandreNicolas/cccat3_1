import Item from "../entity/Item";

export default interface ItemRepository {
  findItemById(id: number): Promise<Item>;
}
