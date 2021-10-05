# Contributing Guide
## Development
You are more than welcome to add any functionality you like to the bot. You can also make improvements in the existing code, write unit tests, or do anything else to upgrade the bot.
### Adding new commands
Each command occupies a single file in the directory `/commands/[category]`.  
A [template file](https://github.com/fossgect/fossbot/blob/main/templates/command.js) can be found in `/templates` directory. Copy the file to the correct subfolder in the `/commands` directory, rename, and edit the file as required.  
The subfolders merely exist to group the commands into different categories for ease of organization.  
Refer to the documentation for the [list of permissions](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS) that can be checked for before executing commands.
### Adding new events
Each event occupies a single file in the `/events` directory.  
A [template file](https://github.com/fossgect/fossbot/blob/main/templates/event.js) can be found in `/templates` directory. Copy the file to the `/events` directory, rename, and edit the file as required.  
Events cannot be arbitrarily named, as they represent functionality built into the Discord API. Refer to the *events* column in the corresponding page in the documentation for a list of [supported events](https://discord.js.org/#/docs/main/stable/class/Client).
## Setting up the Environment
### Configuration
After you fill in the `config.json` file, take care NOT to check it in to Git. Files with sensitive strings (like API tokens and Personal Access Tokens) should never be checked into version control.
### Bot Token
If you don't know how to obtain the *bot token* from the Discord Developers portal, refer to the **How to Create a Discord Bot Account** section in the [FreeCodeCamp tutorial](https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/).
### ESLint
To follow the best coding practices used in the industry, a linter called ESLint is used in this project. The configurations for the linter are already set up, and the linter itself is installed along with the other dependencies of the project.  
Check your files for conformity using:
```bash
npx eslint your-file.js
```
ESLint can be integrated with popular text editors using plugins so that you don't have to manually check each file. Refer to the [official site](https://eslint.org/docs/user-guide/integrations) for instructions on integrating ESLint into your own editor.
## Resources
https://discord.js.org - Official API documentation for Discord.JS  
https://discordjs.guide/ - A Guide to developing Discord bots using Discord.JS  
https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/ - An awesome tutorial on creating and hosting a Discord bot  
