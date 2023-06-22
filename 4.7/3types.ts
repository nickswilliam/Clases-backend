type Coordenadas = {
    x: number,
    y: number
}

type color = 'rojo' | 'verde' | 'azul' //este es un tipo de union

type Punto = Coordenadas & {  //este tipo es una intersección.
    color: color
}

const punto: Punto = {
    x: 88,
    y: 92,
    color: "rojo"
}

console.log(punto);

interface Animal {
    nombre: string,
    comer():void
}

interface Mascosta extends Animal {
    jugar():void
}

class Perro implements Mascosta {
    nombre: string
    constructor(nombre: string){
        this.nombre = nombre
    }
    comer(): void {
        console.log(`Come falopita ${this.nombre}`);
        
    }
    jugar(): void {
        console.log(`Juega con la cola ${this.nombre}`);
        
    }
}

const miMascota = new Perro('Nicks')
miMascota.comer()
miMascota.jugar()