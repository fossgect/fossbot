const { ORG_TOKEN, ORG_NAME } = require('../../util/botConfig');

// Octokit is a minimalistic library to utilize Github's REST API
const { Octokit } = require('@octokit/core');
const octokit = new Octokit({ auth: `${ORG_TOKEN}` });
const request = octokit.request;

module.exports = {
  name: 'remove',
  description: `Invite a user to FOSS GECT's GitHub organization.`,
  category: 'GitHub',
  aliases: ['githubremove', 'ghremove'],
  permissions: 'ADMINISTRATOR',
  usage: '<github-username>',

  async execute(message, args) {
    if (args.length != 1) {
      message.lineReply(`Oops! That's not right..😕\nTry using:`
          + ` **${message.client.prefix}${this.name} ${this.usage}**`);
      return;
    }

    // remove a user/invite
    try {
      await request(
        `DELETE /orgs/${ORG_NAME}/memberships/${args[0]}`,
      );
    }
    catch (e) {
      console.log(e);
      message.lineReply(`${e.response.data.message}`);
      return;
    }

    // user/invite removed
    console.log(`User ${args[0]} removed`);
    message.lineReply(`✔ Removed!`);
    return;
  },
};
