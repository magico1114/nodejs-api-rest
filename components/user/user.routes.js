const routes = require('express').Router();
const userController = require('./user.controller');

routes.post('/', userController.add);
routes.get('/all', userController.getAll); // for dev porpouse
routes.get('/:id', userController.get);
routes.delete('/:id', userController.remove);

module.exports = routes;