const articleModel = require('./article.model');
const httpCodes = require('http-status-codes');

exports.get = (req, res) => {
    const { id } = req.params;
    articleModel.get(id)
        .then((result) => {
            res.statusCode = httpCodes.OK;
            res.json(result);
        })
        .catch((e)=>{
            res.statusCode = httpCodes.NOT_FOUND;
            res.json({error : "Article doesn't exist"});
        });;
};

exports.getAll = (req, res) => {
    // TODO: Add pagination and limits!
    articleModel.getAll()
        .then((result) => {
            res.statusCode = httpCodes.OK;
            res.json(result);
        });
};

exports.getByTag = (req, res) => {
    // TODO: Add pagination and limits!
    const tags = req.query['tag'];
    console.log("Le paso los siguientes TAGS: " + tags);
    articleModel.getByTag(tags)
        .then((result) => {
            res.statusCode = httpCodes.OK;
            res.json(result);
        });
};

exports.add = (req, res) => {
    // TODO: Data must be validated!
    articleModel.create(req.body)
        .then((result) => {
            res.statusCode = httpCodes.CREATED;
            res.json({id: result._id});
        });
};

exports.edit = (req, res) => {
    // TODO: Data must be validated!
    const { id } = req.params;
    articleModel.edit(id, req.body)
        .then((result) => {
            res.statusCode = httpCodes.NO_CONTENT;
            res.json({});
        })
        .catch((e)=>{
            res.statusCode = httpCodes.NOT_FOUND;
            res.json({error : "Article doesn't exist"});
        });;
};

exports.remove = (req, res) => {
    // TODO: Data must be validated!
    const { id } = req.params;
    articleModel.remove(id)
        .then((result) => {
            res.statusCode = httpCodes.NO_CONTENT;
            res.json({});
        })
        .catch((e)=>{
            res.statusCode = httpCodes.NOT_FOUND;
            res.json({error : "Article doesn't exist"});
        });;
};