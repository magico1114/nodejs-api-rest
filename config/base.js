// Add all configurable settings shared between Dev and Prod here!
const baseConfig = {
    baseURL: "/",
    JWT: {
        key: "supersecretccapirest*1114",
        options: {
            expiresIn:  "10y"
        }
    },
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