const {run} = require('@probot/adapter-github-actions')
const settings = require('probot-settings')

run(settings).catch((error) => {
  console.error(error);
  process.exit(1);
});
