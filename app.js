/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    const SettingsApp = require('probot-settings/lib/settings')
    const settings = require('probot-settings')
    app.log.info("Yay! The app was loaded!");
    app.log.debug("testing debug logging")
    settings.default(app, null, Settings = SettingsApp)
    app.log.error("Yay! Settings ran maybe!")
};