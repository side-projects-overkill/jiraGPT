const { logger } = require('../../utils/logger');
const { createJira } = require('../../services/createJira');

const createJiraCommandCallback = async ({ command, ack, respond, say }) => {
  try {
    await ack();
    await respond(`Creating Jira for ${command.text}`);
    const data = createJira(command.text);
    logger.info(data);
    await say(`creating jira completed for ${data}`);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { createJiraCommandCallback };
