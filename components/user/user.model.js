const mongoose = require('../../services/mongoose').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    avatar: String
});

const User = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};

exports.getAll = () => {
    // TODO: Add pagination and limits!
    return new Promise((resolve, reject) => {
        User.find()
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.get = (id) => {
    console.log("Get User, ID: " + id);
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result.__v;
            return result;
        });
};