const { ORG_TOKEN, ORG_NAME } = require('../../util/botConfig');

// Octokit is a minimalistic library to utilize Github's REST API
const { Octokit } = require('@octokit/core');
const octokit = new Octokit({ auth: `${ORG_TOKEN}` });
const request = octokit.request;
let response;

module.exports = {
  name: 'invite',
  description: `Invite a user to FOSS GECT's GitHub organization.`,
  category: 'GitHub',
  args: true,
  aliases: ['githubinvite', 'ghinvite'],
  permissions: 'ADMINISTRATOR',
  usage: '<github-username>',

  async execute(message, args) {
    if (args.length != 1) {
      message.lineReply(`Oops! That's not right..😕\nTry using:`
          + ` **${message.client.prefix}${this.name} ${this.usage}**`);
      return;
    }

    // fetch GitHub User ID
    try {
      response = await request(`GET /users/${args[0]}`, {
        type: 'private',
      });
    }
    catch (e) {
      console.log(e);
      message.lineReply(`${e.response.data.message}`);
      return;
    }
    const id = response.data.id;

    // send an invite from the GitHub organization
    try {
      response = await request(`POST /orgs/${ORG_NAME}/invitations`, {
        invitee_id: id,
      });
    }
    catch (e) {
      console.log(e);
      message.lineReply(`${e.response.data.message}`);
      return;
    }

    // invite sent
    console.log(`User ${args[0]} invited.`);
    message.lineReply('✔ Invite sent!');
    return;
  },
};

