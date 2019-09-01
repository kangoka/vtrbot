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
    	message.reply('LU KEK ASU');
  	}
});

client.on('message', message => {
    if (message.content === 'kontol') {
    	message.reply('KONTOLMU BELOK');
  	}
});

client.on('message', message => {
    if (message.content === 'lonte') {
    	message.reply('WAJAHMU KEK LONTE');
  	}
});

client.on('message', message => {
    if (message.content === 'anjing') {
    	message.reply('MUKALU KEK ANJING');
  	}
});

client.on('message', message => {
    if (message.content === 'bangsat') {
    	message.reply('KASAR BET SIANJING');
  	}
});

client.on('message', message => {
    if (message.content === 'bgst') {
    	message.reply('KASAR BET KEK TITIT LU');
  	}
});

client.on('message', message => {
    if (message.content === 'tes' || message.content === 'tos') {
    	message.reply('TAS TES TAS TES LU KIRA MIC NJING');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
