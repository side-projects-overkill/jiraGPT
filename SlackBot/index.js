const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

/* Add functionality here */

// app.message('hey', async ({ command, say }) => {
//   try {
//     say('Hello Human!');
//   } catch (error) {
//     console.log('err');
//     console.error(error);
//   }
// });

// (async () => {
//   // Start the app
//   await app.start(process.env.PORT || 3000);

//   console.log('⚡️ Bolt app is running!');
// })();

app.message('a', async ({ command, say }) => {
  console.log('Got it');
  // Replace hello with the message
  try {
    say("Hi! Thanks for PM'ing me!");
  } catch (error) {
    console.log('err');
    console.error(error);
  }
});

app.command('/groom', async ({ command, say }) => {
  try {
    say("Grooming the Jira ticket", command);
  } catch (error) {
    console.log('err');
    console.error(error);
  }
});

app.start(3000);
