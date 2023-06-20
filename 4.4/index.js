import inquirer from "inquirer";
import { save, get } from "./readWritePromises.js";
import { promptUser } from "./promptUser.js";

const main = async () => {
  let promptRunning = true;
  while (promptRunning) {
    const options = await inquirer.prompt([
      {
        type: "list",
        name: "choices",
        message: "Selecciona una opción",
        choices: [
          { value: 1, name: "Agregar nuevo usuario" },
          { value: 2, name: "Obtener usuarios" },
          { value: 99, name: "Exit" },
        ],
      },
    ]);

    switch (options.choices) {
      case 1:
        await createNewUser();
        break;
      case 2:
        await getAllUsers();
        break;
      case 99:
        promptRunning = false
        break;
      default:
        promptRunning = false
        break;
    }
  }
};

main();

const createNewUser = async () => {
  const user = await promptUser();

  const userJson = await get("./users.json");
  const newUserData = [...userJson, user];
  save("./users.json", newUserData);
};

const getAllUsers = async () => {
  const users = await get("./users.json");
  console.log(users);
};
