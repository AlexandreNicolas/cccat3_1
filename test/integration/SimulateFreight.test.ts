import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import SimulateFreightInput from "../../src/application/dto/SimulateFreightInput";
import SimulateFreight from "../../src/application/usecase/SimulateFreight";

test("Calcule total freight of all items", async function () {
  const freightInput = [ 
    {
      idItem: 1,
      quantity: 1
    },
    {
      idItem: 2,
      quantity: 1
    },
    {
      idItem: 3,
      quantity: 3
    }
  ]
  const simulateFreight = new SimulateFreight(new ItemRepositoryDatabase());
  const total = await simulateFreight.execute(new SimulateFreightInput(freightInput));
  expect(total).toBe(280);
});

