function obtenerPrimerElemento(array) {
    //el tipo genérico puede en este caso recibir un array de numeros, de strings, etc.
    if (array.length > 0) {
        return array[0];
    }
    return undefined;
}
var numeros = [1, 2, 3, 4, 5, 6];
var primerNumero = obtenerPrimerElemento(numeros);
console.log(primerNumero);
