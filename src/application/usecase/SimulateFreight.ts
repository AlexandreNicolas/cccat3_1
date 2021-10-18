import ItemRepository from "../../domain/repository/ItemRepository";
import CalculateFreight from "../../domain/service/CalculateFreight";
import SimulateFreightInput from "../dto/SimulateFreightInput";


export default class SimulateFreight {
  constructor(readonly itemRepository: ItemRepository) {
  }
  async execute(freightInput: SimulateFreightInput): Promise<number> {
    let freight = 0;
    for (const itemInput of freightInput.items) { 
      const item = await this.itemRepository.findItemById(itemInput.idItem);
      freight += CalculateFreight.calculate(item) * itemInput.quantity;
    }
    return freight;
  }
}
