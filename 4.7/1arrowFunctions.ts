const sumar = (a: number, b: number):number => a + b

console.log(sumar(12, 10));

const objeto = {
    nombre: 'Nicks',
    saludo: function(){
        console.log(`Hola ${this.nombre}`);
        
    }
}

objeto.saludo()