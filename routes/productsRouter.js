// Nos traemos a express
const express = require("express");
const router = express.Router();

// listar products
app.router("/", (request, response) => {
  response.json([{name : "yoniher", age : 18}, {name : "Oscar", age : 23}]);
});

// Consultar un product
app.router("/:id", (request, response) => {
  const {id} = request.params;
  response.json({id, name : "yoniher", age : 18});
});

module.exports = router;
