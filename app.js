
/**
 * @param {import('probot').Probot} robot
 */
module.exports = (robot) => {
    const SettingsApp = require("probot-settings/lib/settings");
    const probotSettings = require('probot-settings')
    let _;
    probotSettings.default(robot, _, SettingsApp)
};