// Nos traemos a express
const express = require("express");

const productsRouter = require("./productsRouter");
const rolesRouter = require("./rolesRouter");
const buysRouter = require("./buysRouter");
//const statusRouter = require("./statusRouter");
const usersRouter = require("./usersRouter");

function routerApi(app){
  // Ruta maestra
  const router = express.Router();
  app.use("/api/v1",router)

  router.use("/products",productsRouter);
  router.use("/buys",buysRouter);
  //router.use("/status",statusRouter)
  router.use("/users",usersRouter);
  router.use("/roles",rolesRouter);
}

module.exports = routerApi;
