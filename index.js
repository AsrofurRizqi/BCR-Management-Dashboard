require("dotenv").config({});
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = process.env.PORT || 3030;

app.set('view engine', 'ejs');

const mainRoutes = require('./src/routes/');
app.use(express.urlencoded({extended: false}), express.static('public'),methodOverride('_method'));
app.use('/', mainRoutes)

app.listen(port ,() =>{
    console.log("server berjalan pada port "+port);
})