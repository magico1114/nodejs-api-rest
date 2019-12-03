const process = require('process');

const { NODE_ENV, API_KEY } = process.env;

const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;
const mode = isProduction ? 'prod' : 'dev';

const env = {
    isProduction,
    isDevelopment,
    mode,
    API_KEY
  };

module.exports = env;
