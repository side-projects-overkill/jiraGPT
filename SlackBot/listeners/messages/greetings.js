const { logger } = require("../../utils/logger");

const greetingsCallback = async ({ context, say }) => {
  try {
    logger.info(context);
    await say("What are you looking for?");
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { greetingsCallback };
