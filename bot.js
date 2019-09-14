const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", async() => {
    console.log('TOD BOT IS HERE NJING');
    client.user.setActivity('YouTube', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});
  
  
client.on('message', async message => {
    if (message.author.bot) return;
    
    if (message.content.toLowerCase() === ('ping') || ('peng')) { 
    	message.reply('BERISIK ANJING');
  	} else if (message.content.toLowerCase() === ('asu') || ('asw')) {
    	    message.reply('MUKELU KEK ASU');
  	} else if (message.content.toLowerCase() === ('ajg') || ('anjing') || ('anjeng')) {
    	    message.reply('MUKELU KEK ANJING');
  	} else if (message.content.toLowerCase() === ('ngentot') || ('ngentod') || ('ngntd')) {
    	    message.reply('NGENTAT NGENTOT, BOCIL MASIH COKIL AE KASAR BET ANJING');
  	} else if (message.content.toLowerCase() ('bgst') === || ('bangsat')) {
    	    message.reply('HEH ANJING KASAR BANGET NGENTOT');
  	} else if (message.content.toLowerCase() === ('lonte')) {
    	    message.reply('LONTE? MUKAMU KEK LONTE');
  	} else if (message.content.toLowerCase() === ('kontol') || ('kntl')) {
    	    message.reply('KONTOLMU BELOK');
  	} else if (message.content.toLowerCase() === ('memek') || ('kemem') || ('mmk') || ('mmq') || ('memeq') || ('memex')) {
            message.reply('MEMEK MU TEMBEM');
  	} else if (message.content.toLowerCase()=== ('kentod') || ('kentot') || ('netnot')) {
        	message.reply('MANGGIL LU TOD <@267473212626042882>');
  	} else if (message.content.toLowerCase() ('nigga') === || ('nigger') || ('nigg') || ('niggward')) {
    	    message.reply('GABOLEH RASIS ANJING, YA GAK <@267473212626042882>');
  	} else if (message.content.toLowerCase() === ('aldo') || ('aldog')) {
        	message.reply('<@292889185252278272> ANJING');
  	} else if (message.content.toLowerCase() === ('dipo')) {
    	    message.reply('CLOUD SERVICE');
  	} else if (message.content.toLowerCase() === ('fuck')) {
    	    message.reply('AHHH... YAMETE KUDASAIIII');
  	} else if (message.content.toLowerCase() === ('asshole') || ('ass hole')) {
    	    message.reply('LOBANG PANTATMU HITAM');
  	} else if (message.content.toLowerCase() === ('penis') || ('vagina')) {
        	message.reply('ALAT NGENTIAW ALAMI');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
