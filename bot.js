const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PANG PING PANG PING MATAMU COK');
  	}
});

client.on('message', message => {
    if (message.content === 'asu') {
    	message.reply('KOK KASAR NJING?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
