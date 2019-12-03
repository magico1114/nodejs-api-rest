const jwt = require('jsonwebtoken');
const { JWT } = require('../config');

// Please use your own information to identify in the middleware logs the owner of the token 
const payload = {
    name: "Agustin Camero", // Add your Name
    email: "magico@xagus.com.ar", // Your email
    company: "TEST" // Your company
}

const token = jwt.sign(payload, JWT.key, JWT.options);

console.log("Your token: " + token);