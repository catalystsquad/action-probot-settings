/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    const SettingsApp = require('probot-settings/lib/settings')
    const settings = require('probot-settings')
    app.log("Yay! The app was loaded!");
    settings.default(app, null, Settings = SettingsApp)
    app.log("Yay! Settings ran maybe!")
};