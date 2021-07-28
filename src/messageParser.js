// function to parse messages to find commmands and arguments
function messageParser(message) {
    // Prefix for every command
    const prefix = "&";

    // remove leading or trailing spaces from the message content
    const content = message.content.trim();

    // check if message is a command
    if (content.startsWith(prefix)) {
    // split whole message at the spaces(regex used to detect more than 1 blank space)
        let args = content.slice(prefix.length).trim();
        args = args.split(/\s+/);

        // command will be the first element inside array args
        // rest of the elements after removing first element are the arguments
        const cmd = args.shift();
        return [cmd, args];
    }

    // not a command - return undefined
    return [undefined, undefined];
}

module.exports = messageParser;
