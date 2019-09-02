const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});
  

client.on('message', async message => {
    if (message.author.bot) {
        return;
    }
    
    if (message.content.toLowerCase().includes ('ping') || ('peng')) { 
    	message.reply('BERISIK ANJING');
  	} else if (message.content.toLowerCase().includes ('asu') || ('asw')) {
    	    message.reply('MUKELU KEK ASU');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
