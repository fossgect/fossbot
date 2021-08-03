/**
 * Runs each time the server recieves a message.
 * Performs the required checks and then executes the command
 * if available.
 */

const { BOT_CHANNEL } = require('../util/botConfig');

module.exports = {
  name: 'message',
  execute(message) {

    // handle DMs to the bot
    if (message.channel.type === 'dm') {
      return message.lineReply(
        `Can't execute commands inside DMs. 😅\nTalk to me from the server.`,
      );
    }

    // checks whether the message is a command,
    // whether it is from the bot itself,
    // or whether it is a message in a non-bot channel
    if (!message.content.startsWith(message.client.prefix) || message.author.bot
                || message.channel.name != BOT_CHANNEL) return;

    // removes the prefix and splits the message into arguments
    const args = message.content
      .slice(message.client.prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    // checks whether the command exists
    const command = message.client.commands.get(commandName)
        || message.client.commands
          .find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
      return message.lineReply(`❌ Uh-oh! That's not a valid command (yet).`);
    }

    // check whether the user has permission to execute the command
    if (command.permissions) {
      const authorPerms = message.channel.permissionsFor(message.author);
      if (!authorPerms || !authorPerms.has(command.permissions)) {
        return message.lineReply(`❌ You don't have permission to do this!`);
      }
    }

    // runs the command
    try {
      console.log(`${message.author.tag} ran the command "${command.name}"`);
      command.execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.lineReply('❌ There was an error trying to execute that command!');
    }
  },
};
