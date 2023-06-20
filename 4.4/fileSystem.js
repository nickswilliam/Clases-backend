import fs from "fs";

const text = "Escribiendo archivo";

fs.writeFileSync("archivosync.txt", text); //text sync

const textAsync = "Escribiendo asincono";

fs.writeFile("archivoAsync.txt", textAsync, function (error) {
  //text async
  if (error) {
    console.log(error);
  }
  console.log("El archivo se escribio correctamente");
});
