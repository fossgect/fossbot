/**
 * Try to access config.json and read the values.
 * If it is not present, use values from enviornment variables.
 */

let config;

try {
  config = require('../config.json');
}
catch (error) {
  config = null;
}

exports.BOT_TOKEN = config ? config.BOT_TOKEN : process.env.BOT_TOKEN;
exports.BOT_CHANNEL = config ? config.BOT_CHANNEL : process.env.BOT_CHANNEL;
exports.PREFIX = config ? config.PREFIX : process.env.PREFIX;
exports.ORG_TOKEN = config ? config.ORG_TOKEN : process.env.ORG_TOKEN;
exports.ORG_NAME = config ? config.ORG_NAME : process.env.ORG_NAME;