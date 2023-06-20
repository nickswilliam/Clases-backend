import inquirer from "inquirer";

const run = async () => {
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
  }
  console.log(options);
};
