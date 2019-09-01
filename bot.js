const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});

client.on('message', message => {
    if (message.content.includes ('ping')) {
    	message.reply('PANG PING PANG PING MATAMU COK');
  	}
    else if (message.content.toLowerCase() === 'asu' || message.content.toLowerCase() === 'asw' || message.content.toLowerCase() === 'ajg' || message.content.toLowerCase() === 'anjing') {
    	message.reply('MUKELU KEK ANJING');
  	}
    else if (message.content.toLowerCase() === 'ngentot' || message.content.toLowerCase() === 'ngentod') {
    	message.reply('NGENTAT NGENTOT, BOCIL MASIH COKIL AE KASAR BET ANJING');
  	}
    else if (message.content.toLowerCase() === 'bangsat' || message.content.toLowerCase() === 'bgst' || message.content.toLowerCase() === 'bangsad' || message.content.toLowerCase() === 'bgsd') {
    	message.reply('HEH ANJING KASAR BANGET NGENTOT');
  	}
    else if (message.content.toLowerCase() === 'lonte') {
    	message.reply('LONTE? MUKAMU KEK LONTE');
  	}
    else if (message.content.toLowerCase() === 'kontol' || message.content.toLowerCase() === 'kntl') {
    	message.reply('KONTOLMU BELOK');
  	}
    else if (message.content.toLowerCase() === 'memek' || message.content.toLowerCase() === 'kemem' || message.content.toLowerCase() === 'mmk' || message.content.toLowerCase() === 'mmq') {
    	message.reply('MEMEK MU TEMBEM');
  	}
    else if (message.content.toLowerCase() === 'kentod') {
    	message.reply('MANGGIL LU TOD <@267473212626042882>');
  	}
    else if (message.content.toLowerCase() === 'nigga' || message.content.toLowerCase() === 'nigg' || message.content.toLowerCase() === 'nigger') {
    	message.reply('GABOLEH RASIS ANJING, YA GAK <@267473212626042882>');
  	}
    else if (message.content.toLowerCase() === 'aldo' || message.content.toLowerCase() === 'aldog') {
    	message.reply('ANJING');
  	}
    else if (message.content.toLowerCase() === 'dipo') {
    	message.reply('CLOUD SERVICE');
  	}
    else if (message.content.toLowerCase() === 'fuck') {
    	message.reply('AHHH... YAMETE KUDASAIIII');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
