const { logger } = require('../../utils/logger');
const { createJira } = require('../../services/createJira');

const createJiraCommandCallback = async ({ command, ack, respond, say }) => {
  try {
    await ack();
    await respond(`Creating Jira for ${command.text}`);
    await createJira(command.text);
    // Add error handler
    logger.info('Jira created');
    await say(`Creating jira completed for: ${command.text}`);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { createJiraCommandCallback };
