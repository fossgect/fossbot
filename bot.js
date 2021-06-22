const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const messageHandler = require("./src/messageHandler");

client.on("ready", () => {
  console.log(`${client.user.tag} is ready`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  //function to handle messages
  messageHandler(client, message);
});

//login
client.login(process.env.BOT_TOKEN);
