const { run } = require("@probot/adapter-github-actions");
const app = require("./app");
console.log(process.env)
process.env.LOG_LEVEL='debug'

run(app);