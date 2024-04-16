const { logger } = require("../../utils/logger");
const { groomJira } = require("../../services/groom");

const groomCommandCallback = async ({ command, ack, respond, say }) => {
  try {
    await ack();
    await respond("Grooming");
    const data = groomJira(command.text);
    await say(`Grooming completed for ${data}`);
  } catch (error) {
    logger.error(`Groom command failed ${error}`);
  }
};

module.exports = { groomCommandCallback };
