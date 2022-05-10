/**
 * @param {import('probot').Probot} app
 * @param {import('probot-settings')} settings
 */
module.exports = (app, settings,) => {
    const SettingsApp = require('probot-settings/lib/settings')
    app.log("Yay! The app was loaded!");
    settings.default(app, null, Settings = SettingsApp)
    app.log("Yay! Settings ran maybe!")
};