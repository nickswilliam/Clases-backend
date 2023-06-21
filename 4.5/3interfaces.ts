interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Nicks",
  edad: 25,
};

console.log(persona);

interface Calculadora {
  sumarr(a: number, b: number): number;
  restarr(a: number, b: number): number;
}

const calculator: Calculadora = {
  sumarr(a, b) {
    return a + b;
  },
  restarr(a, b) {
    return a - b;
  },
};

interface Animal {
  nombre: string;
  sonido(): void;
}

interface Perro extends Animal {
  //la propiedad extends, es que hereda todas las propiedades de la interfaz anterior es decir nombre, sonido()
  ladrar(): void;
}

class GoldenRetriever implements Perro {
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  nombre: string;
  sonido(): void {
    console.log("woof");
  }
  ladrar(): void {
    console.log("wow, wow");
  }
}

let perro: Perro = new GoldenRetriever("Max");

perro.ladrar();
perro.sonido();
console.log(perro.nombre);

interface Punto {
  x: number;
  y: number;
}

let puntos: Punto[] = [
  { x: -10, y: 20 },
  { x: 0, y: 0 },
];
