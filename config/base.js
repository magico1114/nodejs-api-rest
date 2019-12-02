// TODO: Add all database settings here and in Dev and Prod
const baseConfig = {
    baseURL: "/",
    DB: {
        connString: "mongodb+srv://dev_user:xaTImRSRgFDG9rAY@code-challenge-api-rest-jsa05.mongodb.net/test?retryWrites=true&w=majority",
        options: { 
            autoIndex: false,
            reconnectTries: 50,
            reconnectInterval: 500,
            poolSize: 100,
            bufferMaxEntries: 0,
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    }
}

module.exports = baseConfig;