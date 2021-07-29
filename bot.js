/**
 * The main logic of the bot is defined here.
 * The discord client is initialized and logged in.
 * All commands and events defined in the external files
 * are enumerated automatically and registered.
 */

const fs = require('fs');
require('dotenv').config();
const { PREFIX, BOT_TOKEN } = require('./util/botConfig');

const Discord = require('discord.js');

// used for 'reply' messages
require('discord-reply');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.prefix = PREFIX;

// registers all commands from the 'commands' folder
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`)
    .filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

// registers all events from the 'events' folder
const eventFiles = fs.readdirSync('./events')
  .filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  }
  else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(BOT_TOKEN);