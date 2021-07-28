const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows this message.",
    usage: "help",
    category: "Discord",
    // eslint-disable-next-line no-unused-vars
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`fossbot commands`)
            .setColor("#04c46c")
            .attachFiles(["logo.png"])
            .setThumbnail("attachment://logo.png");
        embed.setDescription(`
**General :**    
  &help

**Github :**    
  &invite  username     
  &remove  username _(admin only)_
  `);

        message.lineReply(embed);
    },
};