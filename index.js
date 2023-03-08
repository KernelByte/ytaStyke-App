// Nos traemos a express
const express = require("express");

// Ejecutamod el metodo de express
const app = express();

// Añadimos el puerto por el que escuchara la app
const port = 3000;

//iniciamos la app en la siguiente ruta
app.get("/", (request, response) => {
  response.send("Inicio del server en Express.");
});

// listar products
app.get("/list_products", (request, response) => {
  response.json([{name : "yoniher", age : 18}, {name : "Oscar", age : 23}]);
});


// Consultar un product
app.get("/products/:id", (request, response) => {
  const {id} = request.params;
  response.json({id, name : "yoniher", age : 18});
});

// Se le indica el puerto a la app
app.listen(port, () => {
  console.log("Mi puerto es: " + port)
})
