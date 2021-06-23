const Discord = require("discord.js");

function help(message) {
  const attachment = new Discord.MessageAttachment("../logo.png", "logo.png");
  embed = new Discord.MessageEmbed()
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
}

module.exports = help;
