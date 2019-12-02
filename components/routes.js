const routes = require('express').Router();

routes.use("/user", require("./user/user.routes"));
routes.use("/article", require("./article/article.routes"));

module.exports = routes;