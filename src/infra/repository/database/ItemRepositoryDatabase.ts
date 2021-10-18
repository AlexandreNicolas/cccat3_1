import DatabaseConnection from "../../database/DatabaseConnection";
import ItemRepository from "../../../domain/repository/ItemRepository";
import DatabaseConnectionAdapter from "../../database/DatabaseConnectionAdapter";
import Item from "../../../domain/entity/Item";

export default class ItemRepositoryDatabase implements ItemRepository {

  constructor( readonly databaseConnection = new DatabaseConnectionAdapter()){    
  }
  async findItemById(id: number): Promise<Item> {
    const [itemData] = await this.databaseConnection.query("select * from ccca.item where id = $1", [id]);
    const item = new Item(itemData.id, itemData.category, itemData.description, itemData.price, itemData.width, itemData.height, itemData.length, itemData.weight);
    return item;
  }
}