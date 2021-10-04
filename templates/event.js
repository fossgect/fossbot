// imports and globals
const { BOT_CHANNEL } = require('../config.json');

module.exports = {

  // name of the event; see Contributing Guide for more information
  name: 'ready',

  // set this to true only if event should be handled exactly once
  // OPTIONAL
  once: true,

  // function executed when the event is triggered
  execute(client) {
    // The client object is passed to each event
    // when it is triggered.
    // Visit the link below for more info about the client object:
    // https://discord.js.org/#/docs/main/stable/class/Client

    const botChannel = client.channels.cache.find(
      channel => channel.name == BOT_CHANNEL,
    );
    botChannel.send('Bot logged in!🙃');
  },
};