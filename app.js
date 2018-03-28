let Discord = require('discord.io');

let bot = new Discord.Client({
	token: process.env.BOT_TOKEN,
	autorun: true
});
bot.on('ready', function() {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function(errMsg, code) { console.log(errMsg, code) });
bot.on('message', function(user, userID, channelID, message, event) {
	if (message === "!roll") {
		bot.sendMessage({
			to: channelID,
			message: Math.floor(Math.random() * 6) + 1
		});
	}
});
