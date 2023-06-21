var persona = {
    nombre: "Nicks",
    edad: 25,
};
console.log(persona);
var calculator = {
    sumarr: function (a, b) {
        return a + b;
    },
    restarr: function (a, b) {
        return a - b;
    },
};
var GoldenRetriever = /** @class */ (function () {
    function GoldenRetriever(nombre) {
        this.nombre = nombre;
    }
    GoldenRetriever.prototype.sonido = function () {
        console.log("woof");
    };
    GoldenRetriever.prototype.ladrar = function () {
        console.log("wow, wow");
    };
    return GoldenRetriever;
}());
var perro = new GoldenRetriever("Max");
perro.ladrar();
perro.sonido();
console.log(perro.nombre);
var puntos = [
    { x: -10, y: 20 },
    { x: 0, y: 0 },
];
