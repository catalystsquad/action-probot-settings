const { run } = require('@probot/adapter-github-actions')
import settings from 'probot-settings'

run(settings).catch((error) => {
  console.error(error);
  process.exit(1);
});
