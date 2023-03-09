// Nos traemos a express
const express = require("express");
const router = express.Router();
// Import services
const productService = require("./../services/productService");

// listar products
const service = new productService();
router.get("/", (request, response) => {
  const products = service.find();
  response.json(products);
});

// Consultar un product
router.get("/:id", (request, response) => {
  const { id } = request.params;
  const product = service.findOne(id);
  if (id === "999") {
    response.status(404).json({
      message: "Not Found"
    })
  } else {
    response.status(200).json(product);
  }
});

//Crear un nuevo producto
router.post("/", (request, response) => {
  const bodyResponse = request.body;
  response.status(201).json({
    message: "User create",
    data: bodyResponse
  });
});

//Actualizar un dato del producto
router.patch("/:id", (request, response) => {
  // se recibe id
  const { id } = request.params;
  const bodyResponse = request.body;
  response.json({
    message: "Product update",
    data: bodyResponse,
    id,
  });
});

//Eliminar un producto
router.delete("/:id", (request, response) => {
  // se recibe id
  const { id } = request.params;
  response.json({
    message: "Product delete",
    id,
  });
});


module.exports = router;
