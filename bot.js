const fs = require("fs");
require("dotenv").config();

const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();

const { PREFIX, BOT_TOKEN } = require("./util/botConfig.");
// const messageHandler = require("./src/messageHandler");

client.once("ready", () => {
  console.log(`${client.user.tag} is ready`);
});
/*
client.on("message", (message) => {
  if (message.author.bot) return;
  // function to handle messages
  messageHandler(client, message);
});
*/
// login
const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}
client.prefix = PREFIX;
client.login(BOT_TOKEN);
