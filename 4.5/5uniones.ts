let aged: number | string = 25
console.log('number:', aged);

aged = 'veinti cinco'
console.log('string:', aged);

function imprimirId(id: number | string){
    console.log(`El ID es: ${id}`);
    
}

imprimirId(25)
imprimirId('falopa')

function obtenerNumero(): number | string {
    return Math.random() < 0.5 ? 10 : 'Error'
}

console.log(obtenerNumero());
