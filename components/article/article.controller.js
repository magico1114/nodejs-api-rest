const articleModel = require('./article.model');

exports.get = (req, res) => {
    const { id } = req.params;
    articleModel.get(id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    // TODO: Add pagination and limits!
    articleModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.add = (req, res) => {
    // TODO: Data must be validated!
    articleModel.create(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.edit = (req, res) => {
    // TODO: Data must be validated!
    const { id } = req.params;
    articleModel.edit(id, req.body)
        .then((result) => {
            res.status(204).send({});
        });
};

exports.remove = (req, res) => {
    // TODO: Data must be validated!
    const { id } = req.params;
    articleModel.remove(id)
        .then((result) => {
            res.status(204).send({});
        });
};

