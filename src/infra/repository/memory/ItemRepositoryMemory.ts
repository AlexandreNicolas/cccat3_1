import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export class ItemRepositoryMemory implements ItemRepository {
  items: Item[];

  constructor() {
    this.items = [
      new Item(1, "Instrumentos Musicais", "Guitar", 1000, 100, 50, 15, 3),
      new Item(2, "Instrumentos Musicais", "Amplificador", 5000, 50, 50, 50, 22),
      new Item(3, "Acessórios", "Cabo", 30, 10, 10, 10, 1)
    ]
    
  }
  async findItemById(id: number): Promise<Item> {
    const item = this.items.find(item => item.idItem === id);
    if(!item) throw new Error("Item not found");
    return item;
  }
}
