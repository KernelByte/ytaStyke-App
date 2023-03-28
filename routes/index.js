// Nos traemos a express
const express = require("express");

const productsRouter = require("./productsRouter");
const rolesRouter = require("./rolesRouter");
const buysRouter = require("./buysRouter");
//const statusRouter = require("./statusRouter");
const usersRouter = require("./usersRouter");
const authRouter = require("./authRouter");

function routerApi(app){
  // Ruta maestra
  const router = express.Router();
  app.use("/api/v1",router);

  router.use("/products",productsRouter);
  router.use("/buys",buysRouter);
  //router.use("/status",statusRouter)
  router.use("/users",usersRouter);
  router.use("/roles",rolesRouter);
  router.use("/auth",authRouter);
}

module.exports = routerApi;
