const mongoose = require('mongoose');
const config = require('../config');
let retries = 0;

const { connString, options } = config.DB;

const mongoConnect = () => {
    console.log('MongoDB connection with retries')

    mongoose.connect(connString, options)
        .then(()=>{
            console.log('DB connected')
        }).catch(err=>{
            ++retries
            console.log(`DB connection fail, retrying in 5 seconds. (Retries: ${retries})`);
            setTimeout(mongoConnect, 5000)
        })
};

mongoConnect();

exports.mongoose = mongoose;