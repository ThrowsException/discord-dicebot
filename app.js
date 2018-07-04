let Discord = require('discord.js');
let request = require('request');
var util = require('util');

let bot = new Discord.Client();
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('message', (message) => {
    if (message.content.indexOf("!broadcast") === 0) {
        [ command, subject, body ] = message.content.split(' ')
        options = {
            uri : `${process.env.AWEBER_API}/broadcast/${process.env.ACCOUNT_ID}`,
            json: true,
            body: { subject: subject, message: body }
        };
        request.post(options, (error, response, body) => {
            if(error) {
              console.error(error);
            }
        });
    }
});

bot.login(process.env.BOT_TOKEN);
