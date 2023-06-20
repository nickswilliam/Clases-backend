let calculator = require("./main");

const { sumarYRestar, multiplicar, sumarExport } = calculator;

console.log(sumarYRestar.sumar(20, 23));

console.log("Resta:", sumarYRestar.restar(42, 23));
console.log("Multiplicar:", multiplicar(20));

console.log(sumarExport(22, 33), "exports");
