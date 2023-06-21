const dato: any = "Hola como va?"
const largo: number = (dato as string).length

console.log(largo);

let valores: any = '1000'
let numero: number = <number>valores

console.log(numero);
