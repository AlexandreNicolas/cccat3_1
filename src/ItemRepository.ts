import Item from "./Item";

export default interface ItemRepository {
  findItemById(id: number): Promise<Item>;
}
