const { findCommandCallback } = require('./find');
const { groomCommandCallback } = require('./groom');

module.exports.register = (app) => {
  app.command('/find', findCommandCallback);
  app.command('/groom', groomCommandCallback);
};
