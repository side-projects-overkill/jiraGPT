const { logger } = require('../../utils/logger');

const groomCommandCallback = async ({ command, ack, respond, say }) => {
  try {
    await ack();
    await respond('Grooming');
    await say(`Grooming completed for ${command.text}`);
  } catch (error) {
    logger.error(`Groom command failed ${error}`);
  }
};

module.exports = { groomCommandCallback };
