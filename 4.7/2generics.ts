function obtenerPrimerElemento<T>(array: T[]): T | undefined {
  //el tipo genérico puede en este caso recibir un array de numeros, de strings, etc.
  if (array.length > 0) {
    return array[0];
  }
  return undefined;
}

const numeros: number[] = [1, 2, 3, 4, 5, 6];

const primerNumero: number | undefined = obtenerPrimerElemento(numeros);
console.log(primerNumero);

const palabra: string[] = ["Holi", "Palabra"];
const primerPalabra: string | undefined = obtenerPrimerElemento(palabra);
console.log(primerPalabra);

const otracosa: ({}| string | number)[] = [{}, 'hola', 1234] 
const primerElementoOtraCosa: ({}| string | number | undefined) = obtenerPrimerElemento(otracosa)
console.log(primerElementoOtraCosa);
