const process = require('process');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
const mode = isProduction ? 'prod' : 'dev';

const env = {
    isProduction,
    isDevelopment,
    mode,
  };

module.exports = env;
