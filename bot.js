const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});
 
client.on('message', (message) => {
    if (message.author.bot) return;
    
    if (message.content.toLowerCase().includes ('ping') || ('peng')) { 
    	message.reply('BERISIK ANJING');
  	} else if (message.content.toLowerCase().includes ('asu') || ('asw')) {
    	    message.reply('MUKELU KEK ASU');
  	} else if (message.content.toLowerCase().includes ('ajg') || ('anjing') || ('anjeng')) {
    	    message.reply('MUKELU KEK ANJING');
  	} else if (message.content.toLowerCase().includes ('ngentot') || ('ngentod') || ('ngntd')) {
    	    message.reply('NGENTAT NGENTOT, BOCIL MASIH COKIL AE KASAR BET ANJING');
  	} else if (message.content.toLowerCase().includes ('bgst') || ('bangsat')) {
    	    message.reply('HEH ANJING KASAR BANGET NGENTOT');
  	} else if (message.content.toLowerCase().includes ('lonte')) {
    	    message.reply('LONTE? MUKAMU KEK LONTE');
  	} else if (message.content.toLowerCase().includes ('kontol') || ('kntl')) {
    	    message.reply('KONTOLMU BELOK');
  	} else if (message.content.toLowerCase().includes ('memek') || ('kemem') || ('mmk') || ('mmq') || ('memeq') || ('memex')) {
            message.reply('MEMEK MU TEMBEM');
  	} else if (message.content.toLowerCase().includes ('kentod') || ('kentot') || ('netnot')) {
        	message.reply('MANGGIL LU TOD <@267473212626042882>');
  	} else if (message.content.toLowerCase().includes ('nigga') || ('nigger') || ('nigg') || ('niggward')) {
    	    message.reply('GABOLEH RASIS ANJING, YA GAK <@267473212626042882>');
  	} else if (message.content.toLowerCase().includes ('aldo') || ('aldog')) {
        	message.reply('<@292889185252278272> ANJING');
  	} else if (message.content.toLowerCase().includes ('dipo')) {
    	    message.reply('CLOUD SERVICE');
  	} else if (message.content.toLowerCase().includes ('fuck')) {
    	    message.reply('AHHH... YAMETE KUDASAIIII');
  	} else if (message.content.toLowerCase().includes ('asshole') || ('ass hole')) {
    	    message.reply('LOBANG PANTATMU HITAM');
  	} else if (message.content.toLowerCase().includes ('penis') || ('vagina')) {
        	message.reply('ALAT NGENTIAW ALAMI');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
