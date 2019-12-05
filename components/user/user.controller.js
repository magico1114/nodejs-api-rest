const userModel = require('./user.model');
const httpCodes = require('http-status-codes');

exports.get = (req, res) => {
    const { id } = req.params; 
    userModel.get(id)
        .then((result) => {
            res.statusCode = httpCodes.OK;
            res.json(result);
        })
        .catch((e)=>{
            res.statusCode = httpCodes.NOT_FOUND;
            res.json({error : "User doesn't exist"});
        });
};

exports.getAll = (req, res) => {
    // TODO: Add pagination and limits!
    userModel.getAll()
        .then((result) => {
            res.statusCode = httpCodes.OK;
            res.json(result);
        });
};

exports.add = (req, res) => {
    // TODO: Data must be validated!
    const { body } = req;
    if (!body || typeof(body.name) === "undefined" || typeof(body.avatar) === "undefined") {
        res.statusCode = httpCodes.NOT_ACCEPTABLE;
        res.json({error : "invalid json data"});
    }

    userModel.create(body)
        .then((result) => {
            res.statusCode = httpCodes.CREATED;
            res.json({id: result._id});
        });
};

exports.remove = (req, res) => {
    // TODO: Data must be validated!
    const { id } = req.params;
    userModel.remove(id)
        .then((result) => {
            res.statusCode = httpCodes.NO_CONTENT;
            res.json({});
        })
        .catch((e)=>{
            res.statusCode = httpCodes.NOT_FOUND;
            res.json({error : "User doesn't exist"});
        });;
};
