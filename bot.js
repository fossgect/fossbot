const fs = require("fs");
require("dotenv").config();
const { PREFIX, BOT_TOKEN, BOT_CHANNEL } = require("./util/botConfig.");

const Discord = require("discord.js");

// used for 'reply' messages
require("discord-reply");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.prefix = PREFIX;

// registers all commands from the 'commands' folder
const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`)
        .filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// runs once, when the bot is ready after startup
client.once("ready", () => {
    console.log(`${client.user.tag} is ready`);
});

// runs when the server recieves a message
client.on("message", message => {

    // checks whether the message is a command, whether it is from the bot itself,
    // or whether it is a message in a non-bot channel
    if (!message.content.startsWith(client.prefix) || message.author.bot
        || message.channel.id != BOT_CHANNEL) return;

    // removes the prefix and splits the message into arguments
    const args = message.content.slice(client.prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    // checks whether the command exists
    const command = client.commands.get(commandName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    // handle DMs to the bot
    if (command.guildOnly && message.channel.type === "dm") {
        return message.reply("Can't execute commands inside DMs. Talk to me from the server.");
    }

    // check whether the user has permission to execute the command
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply("You can not do this!");
        }
    }

    // checks for arguments
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${client.prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // runs the command
    try {
        command.execute(message, args);
        console.log(`${message.author.tag} ran the command "${command.name}"`);
    }
    catch (error) {
        console.error(error);
        message.reply("there was an error trying to execute that command!");
    }
});

client.login(BOT_TOKEN);