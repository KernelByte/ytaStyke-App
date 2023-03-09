// Nos traemos a express
const express = require("express");
const router = express.Router();

// listar products
router.get("/", (request, response) => {
  response.json([{name : "yoniher", age : 18}, {name : "Oscar", age : 23}]);
});

// Consultar un product
router.get("/:id", (request, response) => {
  const {id} = request.params;
  response.json({id, name : "yoniher", age : 18});
});

//Crear un nuevo producto
router.post("/", (request, response) => {
  const bodyResponse = request.body;
  response.json({
    message : "User create",
    data : bodyResponse
  });
});

//Actualizar un dato del producto
router.patch("/:id", (request, response) => {
  // se recibe id
  const {id} = request.params;
  const bodyResponse = request.body;
  response.json({
    message : "Product update",
    data : bodyResponse,
    id,
  });
});


module.exports = router;
