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
