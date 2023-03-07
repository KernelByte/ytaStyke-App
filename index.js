// Nos traemos a express
const express = require("express");

// Ejecutamod el metodo de express
const app = express();

// Añadimos el puerto por el que escuchara la app
const port = 3000;

//iniciamos la app
app.get("/",(require,response)=>{
  response.send("Inicio del server en Express.");
});

// Se le indica el puerto a la app
app.listen(port,()=>{
  console.log("Mi puerto es: "+port)
})
