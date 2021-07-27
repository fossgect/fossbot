// try to access config.json file and read the values, if it is not present, use default values
let config;

try {
  config = require("../config.json");
}
catch (error) {
  config = null;
}

exports.BOT_TOKEN = config ? config.BOT_TOKEN : process.env.BOT_TOKEN;
exports.PREFIX = config ? config.PREFIX : process.env.PREFIX;
exports.ORG_TOKEN = config ? config.ORG_TOKEN : process.env.ORG_TOKEN;
exports.ORG_NAME = config ? config.ORG_NAME : process.env.ORG_NAME;