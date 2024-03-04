require('dotenv').config();
const { App } = require('@slack/bolt');
const { logger: log } = require('./utils/logger');
const { registerListeners } = require('./listeners');

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
  dispatchErrorHandler: async ({ error, logger, response }) => {
    logger.error(`dispatch error: ${error}`);
    response.writeHead(404);
    response.write('Something is wrong!');
    response.end();
  },
  processEventErrorHandler: async ({ error, logger, response }) => {
    logger.error(`processEvent error: ${error}`);
    response.writeHead(200);
    response.end();
    return true;
  },
  unhandledRequestHandler: async ({ logger, response }) => {
    logger.info('Acknowledging this incoming request');
    // acknowledge it anyway!
    response.writeHead(200);
    response.end();
  },
});
/** Register Listeners */
registerListeners(app);

app.error(() => {
  log.fatal('This is fatal error');
});

/**
 * Start the app slack server
 */
(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    log.info('⚡️ App is running!');
  } catch (error) {
    log.error(`App start error: ${error}`);
  }
})();

process.on('uncaughtException', (err) => {
  log.error('UNCAUGHT EXCEPTION 💥 Shutting down');
  log.error(`${err.name}: ${err.message}`);
  process.exit(1);
});
