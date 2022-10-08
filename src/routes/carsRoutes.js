const carsRoutes = require ("express").Router();
const carsControllers = require("../controller/carsControllers")
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require("../helpers/cloudinaryMiddleware")

carsRoutes.get("/", carsControllers.getAllCars);
carsRoutes.post("/", uploadMiddleware,cloudinaryMiddleware,carsControllers.postCars);
carsRoutes.post("/web", uploadMiddleware,cloudinaryMiddleware,carsControllers.postCarsweb);
carsRoutes.get("/:id", carsControllers.getDataById);
carsRoutes.delete("/web", carsControllers.deleteDataweb);
carsRoutes.put("/web", uploadMiddleware,cloudinaryMiddleware,carsControllers.updateDataByIdweb);

module.exports = carsRoutes;