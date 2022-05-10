const settings = require('probot-settings')
const SettingsApp = require('probot-settings/lib/settings')
let Settings = require("probot-settings/lib/settings");
/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    app.log("Yay! The app was loaded!");
    settings.default(app, null, Settings = SettingsApp)
    app.log("Yay! Settings ran maybe!")
};