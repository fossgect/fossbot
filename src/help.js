function help(message) {
  message.reply({
    embed: {
      title: `fossbot commands`,
      thumbnail: {
        url: "https://avatars.githubusercontent.com/u/37906491?s=200&v=4",
      },
      color: "#8855dd",
      description: `
      
      **General :**
      !help

      **Github :**
      !invite  username
      !remove  username _(admin only)_`,
    },
  });
}

module.exports = help;
