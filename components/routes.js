const routes = require('express').Router();

routes.use("/user", require("./user/user.routes"));

module.exports = routes;