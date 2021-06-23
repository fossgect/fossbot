const messageParser = require("./messageParser");
const help = require("./help.js");
const invite = require("./organization/invite");
const remove = require("./organization/remove");

//function that calls messageParser and directs commands to respective functions
function messageHandler(client, message) {
  //call messageParser
  [cmd, args] = messageParser(message);

  //if message is not a command, undefined is returned from messageParser
  if (cmd) {
    console.log(
      `${message.author.tag} : command used - ${cmd} , args provided - ${args}`
    );

    //if message is from incorrect channel;
    if (message.channel.id != process.env.BOT_CHANNEL) {
      message.lineReply("This command is only allowed in **fossbot** channel");
      return;
    }

    //if command is remove
    if (cmd === "help") {
      help(message);
      return;
    }

    //if command is invite
    if (cmd === "invite") {
      invite(message, args);
      return;
    }

    //if command is remove
    if (cmd === "remove") {
      remove(message, args);
      return;
    }

    //if command not found
    message.lineReply("Command does not exist\nUse : **&help**");
  }

  return;
}

module.exports = messageHandler;
