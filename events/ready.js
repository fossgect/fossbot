/**
 * Runs once, when the server becomes ready after startup.
 * Bot becomes online in the server.
 */

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`${client.user.tag} is ready`);
  },
};