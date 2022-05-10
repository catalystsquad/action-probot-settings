// const { run } = require("@probot/adapter-github-actions");
import * as probot from '@probot/adapter-github-actions'
const app = require("./app");

probot.run(app);