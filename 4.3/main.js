let sumarYRestar = {
    sumar: function(num1, num2){
        return num1 + num2
    },
    restar: function(num1, num2){
        return num1 - num2
    }
}


const multiplyByTwo = num => {
    return num * 2
}


module.exports = {
    sumarYRestar,
    multiplicar: multiplyByTwo
}

//Otra forma de exportar

//prioriza module.exports sobre exports.[dato a exportar]

exports.sumarExport = (num1, num2)=> {
    return num1 + num2
}