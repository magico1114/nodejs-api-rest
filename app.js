const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');
const bodyParser = require('body-parser');
const baseRoute = express.Router();
const validToken = require("./middlewares/validToken");

// authentication middleware
app.use(validToken);

app.use(bodyParser.json());

baseRoute.use(routes);
app.use(config.baseURL, baseRoute);

module.exports = app;