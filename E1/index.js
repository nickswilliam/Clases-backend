import inquirer from "inquirer";
import { get, set } from "./readWritePromises.js";
import { dailyPrompt } from "./dailyPrompt.js";
import { monthlyPrompt } from "./monthlyPrompt.js";
import { weeklyPrompt } from "./weeklyPrompt.js";

const main = async () => {
  let runingPrompt = true;

  while (runingPrompt) {
    const options = await inquirer.prompt([
      {
        type: "list",
        name: "choices",
        message:
          "Bienvenido a la App de Gastos, seleccione que tipo de gasto quiere ingresar.",
        choices: [
          { value: 1, name: "Gasto diario" },
          { value: 2, name: "Gasto semanal" },
          { value: 3, name: "Gasto mensual" },
          { value: 4, name: "Traer todos los gastos realizados" },
          { value: 58, name: "Salir" },
        ],
      },
    ]);
    console.log(options);
    switch (options.choices) {
      case 1:
        await dailyCost();
        break;
      case 2:
        await weeklyCost();
        break;
      case 3:
        await monthlyCost();
        break;
      case 4:
        await getAllCosts();
        break;
      case 58:
        runingPrompt = false;
        break;
      default:
        runingPrompt = false;
        break;
    }
  }
};

const dailyCost = async () => {
  const cost = await dailyPrompt();
  const costJson = await get("./costs.json");

  const newDailyCost = [...costJson, { gasto_diario: cost }];
  set("./costs.json", newDailyCost);
};

const weeklyCost = async () => {
  const cost = await weeklyPrompt();
  const costJson = await get("./costs.json");

  const newWeeklyCost = [...costJson, { gasto_semanal: cost }];
  set("./costs.json", newWeeklyCost);
};

const monthlyCost = async () => {
  const cost = await monthlyPrompt();
  const costJson = await get("./costs.json");

  const newMonthlyCost = [...costJson, { gasto_mensual: cost }];
  set("./costs.json", newMonthlyCost);
};

const getAllCosts = async () => {
  const costs = await get("./costs.json");
  console.log(costs);
};

main();
