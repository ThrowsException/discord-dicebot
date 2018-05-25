let Discord = require('discord.io');
let request = require('request');

let bot = new Discord.Client({
    token: process.env.BOT_TOKEN,
    autorun: true
});
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function(errMsg, code) { console.log(errMsg, code) });
bot.on('message', function(user, userID, channelID, message, event) {
    if (message.indexOf("!broadcast") === 0) {
        [ command, subject, body ] = message.split(' ')
        request.post(`${process.env.AWEBER_API}/broadcast/${process.env.ACCOUNT_ID}`,
            { subject: subject, message: body },
            function(error, response, body) {
            bot.sendMessage({
                to: channelID,
                message: body
            });
        });
    }
});
