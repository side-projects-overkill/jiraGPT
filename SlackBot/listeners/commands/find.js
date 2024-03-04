const { logger } = require('../../utils/logger');

const findCommandCallback = async ({ command, ack, respond, say }) => {
  try {
    await ack();
    await respond(`searching ${command.text}`);
    await say('search completed');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { findCommandCallback };
