import inquirer from "inquirer";

export const weeklyPrompt = async () => {
  return await inquirer.prompt(questions);
};

const questions = [
  {
    type: "input",
    name: "usuario",
    message: "Usuario que realizó el gasto: ",
  },
  {
    type: "input",
    name: "monto",
    message: "Monto gastado en $",
  },
  {
    type: "input",
    name: "factura",
    message: "Tipo de factura (A/B/C): ",
  }
];
