interface Comida {
   readonly nombre: string,
   readonly origen: string,
   readonly ingredientes: string[]
}

const comida: Comida = {
    nombre: 'Pizza',
    origen: 'Italiano',
    ingredientes: ['Muzzarella', 'Tomate', 'Aceitunas']
}

// comida.nombre = 'Falopa' La propiedad readonly, crea un elemento al cual solo se le puede asignar un valor y no puede ser reasignado,
//por ende es de solo lectura.

console.log(comida);
