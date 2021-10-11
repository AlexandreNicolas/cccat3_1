import Item from "./Item";
import ItemRepository from "./ItemRepository";

export class ItemRepositoryMemory implements ItemRepository {
  items: Item[];

  constructor() {
    this.items = [
      new Item(1, "Music", "Guitar", 120.12, 1, 2, 3, 4),
      new Item(2, "Music", "Baixo", 200, 1, 2, 3, 4),
      new Item(3, "Music", "Amplifier", 50, 1, 2, 3, 4)
    ]
    
  }
  async findItemById(id: number): Promise<Item> {
    const item = this.items.find(item => item.idItem === id);
    if(!item) throw new Error("Item not found");
    return item;
  }
}
