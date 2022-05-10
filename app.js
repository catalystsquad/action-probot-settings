const Settings = require('probot-settings/lib/settings')
const mergeArrayByName = require("probot-settings/lib/mergeArrayByName");
/**
 * @param {import('probot').Probot} robot
 */
module.exports = (robot) => {
    console.log(`type of settings: ${typeof Settings}`)
    console.log.info(`Settings.FILE_NAME: ${Settings.FILE_NAME}`)
    async function syncSettings (context, repo = context.repo()) {
        const config = await context.config('settings.yml', {}, { arrayMerge: mergeArrayByName })
        return Settings.sync(context.octokit, repo, config)
    }

    robot.on('push', async context => {
        const { payload } = context
        const { repository } = payload

        const defaultBranch = payload.ref === 'refs/heads/' + repository.default_branch
        if (!defaultBranch) {
            robot.log.info('Not working on the default branch, returning...')
            return
        }

        // const settingsModified = payload.commits.find(commit => {
        //     return commit.added.includes(Settings.FILE_NAME) || commit.modified.includes(Settings.FILE_NAME)
        // })

        // if (!settingsModified) {
        //     robot.log.info(`No changes in '${Settings.FILE_NAME}' detected, returning...`)
        //     return
        // }

        return syncSettings(context)
    })

    robot.on('repository.edited', async context => {
        const { payload } = context
        const { changes, repository } = payload

        if (!Object.prototype.hasOwnProperty.call(changes, 'default_branch')) {
            robot.log.info('Repository configuration was edited but the default branch was not affected, returning...')
            return
        }

        robot.log.info(`Default branch changed from '${changes.default_branch.from}' to '${repository.default_branch}'`)

        return syncSettings(context)
    })

    robot.on('repository.created', async context => {
        return syncSettings(context)
    })
};