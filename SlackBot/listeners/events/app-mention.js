const { logger } = require('../../utils/logger');

const appMentionCallback = async ({ event, say }) => {
  try {
    logger.info(event);
    await say('Found it');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { appMentionCallback };
