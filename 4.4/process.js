/* console.log(process.argv);

function leerOpcion(opcion){
    const index = process.argv.findIndex(arg => arg === opcion)

    if(index === -1){
        return false
    }
    return process.argv[index + 1]
}

const nombre = leerOpcion('-nombre');
console.log(`El nombre es: ${nombre}`);

//interacción con el proceso */


process.stdout.write('Cual es el apellido? \n')
process.stdin.on('data', function(data){
    process.stdout.write('El apellido es: ' + data)
    process.exit()
})