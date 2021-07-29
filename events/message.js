// runs when the server recieves a message

const { BOT_CHANNEL } = require("../util/botConfig");

module.exports = {
    name: "message",
    execute(message) {

        // checks whether the message is a command, whether it is from the bot itself,
        // or whether it is a message in a non-bot channel
        if (!message.content.startsWith(message.client.prefix) || message.author.bot
                || message.channel.name != BOT_CHANNEL) return;

        // removes the prefix and splits the message into arguments
        const args = message.content.slice(message.client.prefix.length).trim().split(/\s+/);
        const commandName = args.shift().toLowerCase();

        // checks whether the command exists
        const command = message.client.commands.get(commandName)
                || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        // handle DMs to the bot
        if (message.channel.type === "dm") {
            return message.lineReply("Can't execute commands inside DMs. 😅\nTalk to me from the server.");
        }

        // check whether the user has permission to execute the command
        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                return message.lineReply("❌ You don't have permission to do this!");
            }
        }

        // checks for arguments
        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: **${message.client.prefix}${command.name}`;
                reply += ` ${command.usage}**`;
            }

            return message.lineReply(reply);
        }

        // runs the command
        try {
            command.execute(message, args);
            console.log(`${message.author.tag} ran the command "${command.name}"`);
        }
        catch (error) {
            console.error(error);
            message.reply("❌ There was an error trying to execute that command!");
        }
    },
};