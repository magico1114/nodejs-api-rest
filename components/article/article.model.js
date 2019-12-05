const mongoose = require('../../services/mongoose').mongoose;
const Schema = mongoose.Schema;

const User = require('../user/user.model').UserSchema;

const articleSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}, 
    title: String,
    text: String,
    tags: Array
});

const Article = mongoose.model('Article', articleSchema);

exports.create = (articleData) => {
    const article = new Article(articleData);
    return article.save();
};

exports.getAll = () => {
    // TODO: Add pagination and limits!
    return new Promise((resolve, reject) => {
        Article.find()
            .populate('userId', User)
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
                }
            })
    });
};

exports.get = (id) => {
    console.log("Get Article, ID: " + id);
    return Article.findById(id)
        .populate('userId', User)
        .then((result) => {
            result = result.toJSON();
            delete result.__v;
            return result;
        });
};

exports.getByTag = (tags) => {
    console.log("Get Article by TAGS: " + tags);
    return new Promise((resolve, reject) => {
        Article.find({ tags: { $in: tags } })
            .populate('userId', User)
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
                }
            })
    });        
};

exports.edit = (id, articleData) => {
    console.log("Edit Article process, ID: " + id);
    return new Promise((resolve, reject) => {
        Article.findById(id, function (err, article) {
            if (err) reject(err);
            console.log("Founded, editing Article, ID: " + id);

            for (let i in articleData) {
                article[i] = articleData[i];
            } // Replace with map!

            article.save(function (err, updatedarticle) {
                if (err) return reject(err);
                resolve(updatedarticle);
            });
        });
    })
};

exports.remove = (id) => {
    console.log("Del Article, ID: " + id);
    return new Promise((resolve, reject) => {
        Article.deleteOne({_id: id}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};