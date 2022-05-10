const settings = require('probot-settings')
import SettingsApp from 'probot-settings/lib/settings'
/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    app.log("Yay! The app was loaded!");
    settings.default(app, _, SettingsApp)
    app.log("Yay! Settings ran maybe!")
};