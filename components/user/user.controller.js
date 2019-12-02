const userModel = require('./user.model');

exports.get = (req, res) => {
    userModel.get(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    // TODO: Add pagination and limits!
    userModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.add = (req, res) => {
    // TODO: Data must be validated!
    userModel.create(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};
