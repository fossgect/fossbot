//Octokit is a minimalistic library to utilize Github's REST API
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.ORG_TOKEN}` });
const request = octokit.request;

//function to handle remove command
async function remove(message, args) {
  //if not admin - this is an admin only command
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.lineReply("Only admin can use this command");
    return;
  }

  //only 1 arg allowed
  if (args[0] === undefined || args[1] !== undefined) {
    message.lineReply("Invalid format\nUse : **!invite github-username**");
    return;
  }

  //removing a user/invite
  try {
    await request(
      `DELETE /orgs/${process.env.ORG_NAME}/memberships/${args[0]}`
    );
  } catch (e) {
    //unable to remove user/invite
    console.log(e);
    message.lineReply(`${e.response.data.message}`);
    return;
  }

  //user/invite removed
  console.log(`User ${args[0]} removed`);
  message.lineReply(`Removed`);
  return;
}

module.exports = remove;
