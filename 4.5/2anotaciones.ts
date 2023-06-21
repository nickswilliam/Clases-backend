let nombres: string = "nicolas";
let apellidos: string = "sanchez";

function saludar(nombre: string):void{
    console.log(`Hola ${nombre}, como va?`);
}

saludar(nombres)

function sumar(a: number, b: number):number{
    return a + b
}

let resultados: number = sumar(5, 6)
console.log(resultados);

let numeros: number[] = [1, 2, 4, 6, 61]
let named: string[]= ['nick', 'lara', 'falopa', '']

console.log(numeros);
console.log(named);

