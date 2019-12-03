const routes = require('express').Router();

routes.use("/user", require("../components/user/user.routes"));
routes.use("/article", require("../components/article/article.routes"));

module.exports = routes;