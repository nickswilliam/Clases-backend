interface Producto {
    id: number,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string
}

type InfoProducto = Pick<Producto, "nombre" | "precio"> //extrae de una interfaz, un tipo de interfaz en donde extraigo solo las claves valor de "nombre" y "precio"

const producto: InfoProducto = {
    nombre: 'Pure de tomates',
    precio: 450
}

console.log(producto);
