import fs from "fs"

const contenido = fs.readFileSync("./archivosync.txt", "utf-8") //leer archivos por File System

console.log(contenido);

fs.readFile("./archivoAsync.text", "utf-8", function(error, contenido){
    if(error){
        console.log(error);
    }
    console.log("El contenido es: " + contenido);
})