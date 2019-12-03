const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');
const bodyParser = require('body-parser');
const baseRoute = express.Router();

//TODO: Add authentication middleware


app.use(bodyParser.json());

baseRoute.use(routes);
app.use(config.baseURL, baseRoute);

module.exports = app;