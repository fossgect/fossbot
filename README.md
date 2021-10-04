# 🤖FOSSBot

A bot for managing FOSS GECT's Discord server, and for carrying out tasks that we are too lazy to do on our own. 😜

## Interacting with FOSSBot

### How can I interact with the bot?  

You can interact with the bot by typing in supported bot commands as messages in the server. Bot commands have to be prefixed with the **bot command prefix** for the bot to recognize it as a command. The ampersand symbol (**&**) is the prefix currently in use.  
As of now, the bot only responds to messages sent in a specific channel, set aside specifically for bot interactions. This behavior maybe changed in the future.

### What commands can I use?  

The `help` command can be used to list all commands currently supported by the bot:

```js
&help
```

The `help` command can also be used to understand the usage or purpose of individual commands. For example, here we use the `help` command to see its own description and usage:

```js
&help help

// Usage: &help [command-name]
```

## Contributing

Visit our [Contributing Guide](https://github.com/fossgect/fossbot/blob/main/CONTRIBUTING.md) for more information.

## Development

- Clone the repo.  

    ```bash
    git clone https://github.com/fossgect/fossbot
    cd fossbot
    ```  

- Copy the `config.json` file from `/templates` into the root directory of the repo.

    ```bash
    cp /templates/config.json config.json
    ```  

- Fill in the `config.json` file.
  - `PREFIX` refers to the command prefix that is to be used by the bot. FOSS GECT's deployment currently uses '**&**', however, you are free to change it for your own use.
  - `BOT_TOKEN` is an API token generated using your Discord account. See our [Contributing Guide](https://github.com/fossgect/fossbot/blob/main/CONTRIBUTING.md) for more information on how to obtain this token.
  - `BOT_CHANNEL` is the name of the channel on which the bot should listen for incoming messages.
  - `ORG_NAME` is the name of the GitHub organization involved. This is a configuration associated with the `invite` and `remove` commands.
  - `ORG_TOKEN` is the Personal Access Token of the GitHub organization. This is a configuration associated with the `invite` and `remove` commands.

- Install the dependencies:

   ```bash
   npm install --production=false
   ```

- Run the bot using Nodemon (for auto-reload):

  ```bash
  npm run bot
  ```
