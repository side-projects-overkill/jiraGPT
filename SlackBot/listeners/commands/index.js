const { groomCommandCallback } = require('./groom');
const { createJiraCommandCallback } = require('./createjira');

module.exports.register = (app) => {
  app.command('/groom', groomCommandCallback);
  app.command('/createjira', createJiraCommandCallback);
};
