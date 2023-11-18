const express = require('express')
const app = express()
const productRoute = require('./api/routes/products.js')
const orderRoute = require('./api/routes/orders.js')
app.use("/products",productRoute);
app.use("/orders",orderRoute);

module.exports = app;