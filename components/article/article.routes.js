const routes = require('express').Router();
const articleController = require('./article.controller');

routes.post('/', articleController.add);
routes.get('/all', articleController.getAll); // for dev porpouse
routes.get('/bytag', articleController.getByTag);
routes.get('/:id', articleController.get);
routes.patch('/:id', articleController.edit);
routes.delete('/:id', articleController.remove);

module.exports = routes;