const commands = require("./commands");
const events = require("./events");
const messages = require("./messages");

module.exports.registerListeners = (app) => {
  commands.register(app);
  events.register(app);
  messages.register(app);
};
