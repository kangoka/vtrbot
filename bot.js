const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
    	message.reply('PANG PING PANG PING MATAMU COK');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'asu' || message.content.toLowerCase() === 'anjing' || message.content.toLowerCase() === 'ajg') {
    	message.reply('MUKELU KEK ANJING');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ngentot' || message.content.toLowerCase() === 'ngentod') {
    	message.reply('NGENTAT NGENTOT, BOCIL MASIH COKIL AE KASAR BET ANJING');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'bangsat' || message.content.toLowerCase() === 'bgst') {
    	message.reply('HEH ANJING KASAR BANGET NGENTOT');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'lonte') {
    	message.reply('LONTE, MUKAMU KEK LONTE');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'kontol' || message.content.toLowerCase() === 'kntl') {
    	message.reply('KONTOL MU BELOK');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'memek' || message.content.toLowerCase() === 'kemem') {
    	message.reply('MEMEK MU TEMBEM');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'kentod') {
    	message.reply('MANGGIL LU TOD <@267473212626042882>');
  	}
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'nigga') || message.content.toLowerCase() === 'nigg' || message.content.toLowerCase() === 'nigger'{
    	message.reply('GABOLEH RASIS ANJING, YA GAK <@267473212626042882>');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
