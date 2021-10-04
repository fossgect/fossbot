// imports and globals

module.exports = {

  // name of the command, which can be sent as a message to the bot
  name: 'sayhi',

  // description of the command, to be displayed by the help command
  description: `Says Hi!`,

  // category of the command
  category: 'Discord',

  // aliases of the command, which can be used in place of the original command
  aliases: ['hello', 'sayhello'],

  // permissions required by the user for using this command
  // Optional. Mainly used to limit the use of mod-level commands.
  // Type: String, or array of strings
  permissions: 'ADMINISTRATOR',

  // usage of the command, excluding the command name itself
  usage: '<user-name>',

  // the function to be executed when the command is called
  async execute(message, args) {

    if (args.length != 1) {
      message.lineReply('Hi, stranger!');
      return;
    }

    message.lineReply(`Hi, ${args[0]}!`);
    return;
  },
};

