const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');
const bodyParser = require('body-parser');
const baseRoute = express.Router();
const validToken = require("./middlewares/validToken");
const mongoDB = require('./services/mongoose');

// DB Connection
const connStatus = mongoDB.mongoConnect();
if (!connStatus) {
    console.log("DB conection error, exiting...");
    process.exit();
}

// authentication middleware
app.use(validToken);

app.use(bodyParser.json());

baseRoute.use(routes);
app.use(config.baseURL, baseRoute);

module.exports = app;