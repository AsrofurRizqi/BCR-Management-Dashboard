const carsRoutes = require ("express").Router();
const carsControllers = require("../controller/carsControllers")
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require("../helpers/cloudinaryMiddleware")

carsRoutes.get("/", carsControllers.getAllCars);

carsRoutes.post("/web", uploadMiddleware,cloudinaryMiddleware,carsControllers.postCarsweb);
carsRoutes.post("/", uploadMiddleware,cloudinaryMiddleware,carsControllers.postCars);

carsRoutes.get("/:id", carsControllers.getDataById);

carsRoutes.delete("/web", carsControllers.deleteDataweb);
carsRoutes.delete("/:id", carsControllers.deleteData);

carsRoutes.put("/web", uploadMiddleware,cloudinaryMiddleware,carsControllers.updateDataByIdweb);
carsRoutes.put("/:id", uploadMiddleware,cloudinaryMiddleware,carsControllers.updateDataById);

module.exports = carsRoutes;