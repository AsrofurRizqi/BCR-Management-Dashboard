const webRoutes = require('express').Router();
const carsData = require("../controller/carsControllers")

webRoutes.get('/', carsData.getAllWeb);
webRoutes.get('/add-cars', (req,res) => {
    res.render('add-cars', {layout : 'index'});
});
webRoutes.get('/edit-cars/:id', carsData.getDataByIdweb);
module.exports = webRoutes;