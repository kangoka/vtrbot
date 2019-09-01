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
    if (message.content === 'asu' || message.content === 'Asu' || message.content === 'ASU' || message.content === 'Anjing' || message.content === 'ANJING') || message.content === 'Ajg' || message.content === 'AJG' {
    	message.reply('KASAR BET SIH ANJING');
  	}
});

client.on('message', message => {
    if (message.content === 'kontol' || message.content === 'Kontol' || message.content === 'KONTOL' || message.content === 'kntl' || message.content === 'Kntl' || message.content === 'KNTL' ) {
    	message.reply('KONTOLMU BELOK');
  	}
});

client.on('message', message => {
    if (message.content === 'lonte' || message.content === 'Lonte' || message.content === 'LONTE' ) {
    	message.reply('WAJAHMU KEK LONTE');
  	}
});

client.on('message', message => {
    if (message.content === 'bangsat' || message.content === 'bgst' || message.content === 'BANGSAT' || message.content === 'BGST' || message.content === 'Bangsat') || message.content === 'Bgst' {
    	message.reply('KASAR BET SIANJING');
  	}
});

client.on('message', message => {
    if (message.content === 'ngentot' || message.content === 'ngentod' || message.content === 'Ngentot' || message.content === 'NGENTOT' || message.content === 'Ngentod' || message.content === 'NGENTOD' ) {
    	message.reply('NGENTAT NGENTOT, BOCIL MASIH COLI AE KASAR BANGET ANJING');
  	}
});

client.on('message', message => {
    if (message.content === 'kentod' || message.content === 'Kentod' || message.content === 'KENTOD') {
    	message.reply('MANGGIL LU TOD ');
  	}
});

client.on('message', message => {
    if (message.content === 'nigg' || message.content === 'Nigg') || message.content === 'NIGG' || message.content === 'nigger' || message.content === 'Nigger' || message.content === 'NIGGER' || message.content === 'nigga' || message.content === 'Nigga' || message.content === 'NIGGA' {
    	message.reply('GABOLEH RASIS ANJING, YA GAK? ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
