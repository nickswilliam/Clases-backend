import inquirer from "inquirer";

export const promptUser = async () => {
    return await inquirer.prompt(questions)
}

const questions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Como es tu nombre?: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Como es tu apellido?'
    }
];



