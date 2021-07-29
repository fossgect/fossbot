const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description:
      'Shows help for a specific command, or lists all available commands.',
  usage: '[command]',
  aliases: ['commands'],
  category: 'Discord',

  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('FossBot Help')
      .setColor('#04c46c')
      .attachFiles(['logo.png'])
      .setThumbnail('attachment://logo.png')
      .setAuthor(
        'FossBot🤖',
        'attachment://logo.png',
        'https://github.com/fossgect/fossbot/',
      );

    const reply = [];
    const { commands } = message.client;

    if (!args.length) {
      reply.push('**Available Commands**');
      reply.push(commands.map(command => `- ${command.name}`).join('\n'));
      reply.push(`\nUse **${message.client.prefix}help [command-name]**`
          + 'to get help for the specific command.');
      reply.push(`Example: **${message.client.prefix}help help**`);
    }
    else {
      const name = args[0].toLowerCase();
      const command = commands.get(name)
          || commands.find(c => c.aliases && c.aliases.includes(name));
      if (!command) {
        reply.push(`Uh-oh! That's not a valid command (yet😋).`);
        reply.push(`Use **${message.client.prefix}help**`
            + 'to get a list of available commands.');
      }
      else{
        reply.push(`**Name**: ${command.name}`);
        if (command.category) {
          reply.push(`**Category**: *${command.category}*`);
        }
        if (command.description) {
          reply.push(`**Description**: ${command.description}`);
        }
        if (command.usage) {
          reply.push('**Usage**: '
              + `${message.client.prefix}${command.name} ${command.usage}`);
        }
        if (command.aliases) {
          reply.push(`**Aliases:** ${command.aliases.join(', ')}`);
        }
      }
    }

    embed.setDescription(reply);
    message.lineReply(embed);
  },
};