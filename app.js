let Discord = require('discord.js');
let request = require('request');
var util = require('util');

let bot = new Discord.Client();
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('message', (message) => {
    const {content, channel} = message;
    options = {
        uri : `${process.env.AWEBER_API}/broadcast`,
        json: true,
        body: { subject: 'Update', message: content, channel: channel.id }
    };
    request.post(options, (error, response, body) => {
        if(error) {
          console.error(error);
        }
    });
});

bot.login(process.env.BOT_TOKEN);
