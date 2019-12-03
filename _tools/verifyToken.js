const jwt = require('jsonwebtoken');
const { JWT } = require('../config');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWd1c3RpbiBDYW1lcm8iLCJlbWFpbCI6Im1hZ2ljb0B4YWd1cy5jb20uYXIiLCJjb21wYW55IjoiVEVTVCIsImlhdCI6MTU3NTM0OTM2MSwiZXhwIjoxODkwOTI1MzYxfQ.78r3VinBbE_qOy39l8wmFxu6AbwlyoIy2b0UPM4tlDc";

let data = jwt.verify(token, JWT.key, JWT.options);
console.log("JWT result: " + JSON.stringify(data));

