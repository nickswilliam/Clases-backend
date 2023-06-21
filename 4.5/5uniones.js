var aged = 25;
console.log('number:', aged);
aged = 'veinti cinco';
console.log('string:', aged);
function imprimirId(id) {
    console.log("El ID es: ".concat(id));
}
imprimirId(25);
imprimirId('falopa');
function obtenerNumero() {
    return Math.random() < 0.5 ? 10 : 'Error';
}
console.log(obtenerNumero());
