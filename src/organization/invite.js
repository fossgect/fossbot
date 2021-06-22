//Octokit is a minimalistic library to utilize Github's REST API
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.ORG_TOKEN}` });
const request = octokit.request;
let response;

//function to handle invite command
async function invite(message, args) {
  //only 1 arg allowed
  if (args[0] === undefined || args[1] !== undefined) {
    message.reply("Invalid format\nUse : **!invite github-username**");
    return;
  }

  //fetch user id
  try {
    response = await request(`GET /users/${args[0]}`, {
      type: "private",
    });
  } catch (e) {
    //invalid username or other errors
    console.log(e);
    message.reply(`${e.response.data.message}`);
    return;
  }

  //get user id from previous response
  let id = response.data.id;

  //sending invite
  try {
    repsonse = await request(`POST /orgs/${process.env.ORG_NAME}/invitations`, {
      invitee_id: id,
    });
  } catch (e) {
    //unable to send invite
    console.log(e);
    message.reply(`${e.response.data.message}`);
    return;
  }

  //invite sent
  console.log(`User ${args[0]} invited`);
  message.reply(`Invite sent`);
  return;
}

module.exports = invite;
