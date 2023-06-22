import express, { Application } from "express";
import { logController, loginController, postController } from "./controllers/controllers";

const app: Application = express();
 //uso de middleware para realizar peticiones del tipo POST. 
 //Transforma todas las peticiones en JSON y de objetos tipo body
app.use(express.json())

app.get("/", logController)

app.patch('/', logController)

app.delete('/', logController)

app.get('/login', loginController)

app.post('/log', postController)

//realiza la escucha en el puerto 3000
app.listen(3000, () => {  
  console.log("El servidor está escuchando en el puerto 3000");
});
