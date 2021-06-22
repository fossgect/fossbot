# FOSSBOT
#### Our own discord bot


## Commands
#### General :
- !help
#### Github :
- !invite [username]
- !remove [username] _(admin only)_


## Setup & Run
- clone the repo ```git clone https://github.com/fossgect/fossbot```    
- move into fossbot directory using your terminal ```cd fossbot```
- create file .env ```touch .env```
- open the file .env and fill it as follows
```
BOT_TOKEN = [BOT TOKEN FROM DISCORD]
BOT_CHANNEL = [CHANNEL ID TO WHICH BOT IS ALLOWED TO POST]
ORG_TOKEN = [PERSONAL ACCESS TOKEN OF THE ORG FOR GITHUB COMMANDS]
ORG_NAME = [ORG NAME FOR GITHUB COMMANDS]
```
- install dependancies ```npm i```
- run using script defined in package.json (nodemon used) ```npm run bot```
