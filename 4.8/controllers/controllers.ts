import express, { Request, Response } from "express";

const logController = (req: Request, res: Response): void => {
  const method = req.method;
  const timeStamp = new Date().toLocaleDateString();

  console.log(`Tiempo de petición: ${timeStamp}. Método: ${method}`);

  /* res.send('Hola desde el servidor') //res.send es la respuesta que nos envía el servidor al realizar la petición del tipo GET */

  res.json({
    message: "Hola desde el controlador",
    method,
    timeStamp,
  });
};

const loginController = (req: Request, res: Response): void => {
  const method = req.method;
  const timeStamp = new Date().toLocaleDateString();

  console.log("Tiempo de petición:", timeStamp);
  console.log("Tipo de petición:", method);

  res.json({
    message: "Saludos desde Login, route",
    method,
    timeStamp,
  });
};

const postController = (req: Request, res: Response): void => {
  const method = req.method;
  const timeStamp = new Date().toLocaleDateString();

  console.log(`Tiempo de petición: ${timeStamp}. Método: ${method}`);

  //recibe una peticion Req con un body que tenga la clave: "saludo", si recibe esa req en JSON con esa clave, nos devuelve
  //la res.json({}) descripta abajo
  const saludo = req.body.saludo;

  if (!saludo) {
    console.log(`[${timeStamp}] ¡Falta el campo Saludo en la petición!`);
    res.status(400).json({
      error: "Campo faltante",
      message: "Falta el campo 'saludo' en la petición",
    });
    return;
  }
  res.json({
    message: "Hola desde el controlador post",
    method,
    timeStamp,
    saludo,
  });
};

export { logController, loginController, postController };
