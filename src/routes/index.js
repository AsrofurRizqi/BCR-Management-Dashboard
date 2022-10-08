const mainRoutes = require("express").Router();
const carsRoutes = require("./carsRoutes");
const webRoutes = require("./webRoutes");

mainRoutes.use("/cars", carsRoutes);
mainRoutes.use("/", webRoutes);

module.exports= mainRoutes;