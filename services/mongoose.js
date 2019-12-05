const mongoose = require('mongoose');
const config = require('../config');
const { connString, options } = config.DB;

const mongoConnect = () => {
    console.log('Connecting to DB...')
    mongoose.connect(connString, options);
    return mongoose.connection;
};

exports.mongoConnect = mongoConnect;
exports.mongoose = mongoose;