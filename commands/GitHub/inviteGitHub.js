const { ORG_TOKEN, ORG_NAME } = require("../../util/botConfig");
// Octokit is a minimalistic library to utilize Github's REST API
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${ORG_TOKEN}` });
const request = octokit.request;
let response;
module.exports = {
  name: "invite",
  description: "Invite a user to FOSS GECT's GitHub organization.",
  async execute(message, args) {
    // only 1 arg allowed
    if (args.length != 1) {
      message.lineReply(`Invalid format\nUse : **${message.client.prefix}invite github-username**`);
      return;
    }
    // fetch user id
    try {
      response = await request(`GET /users/${args[0]}`, {
        type: "private",
      });
    }
    catch (e) {
      // invalid username or other errors
      console.log(e);
      message.lineReply(`${e.response.data.message}`);
      return;
    }

    // get user id from previous response
    const id = response.data.id;

    // sending invite
    try {
      response = await request(`POST /orgs/${ORG_NAME}/invitations`, {
        invitee_id: id,
      });
    }
    catch (e) {
      // unable to send invite
      console.log(e);
      message.lineReply(`${e.response.data.message}`);
      return;
    }

    // invite sent
    console.log(`User ${args[0]} invited.`);
    message.lineReply("Invite sent.");
    return;
  },
};

