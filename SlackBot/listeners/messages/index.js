const { greetingsCallback } = require('./greetings');

module.exports.register = (app) => {
  app.message('help', greetingsCallback);
};
