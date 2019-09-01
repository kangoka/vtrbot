const Discord = require('discord.js');
const client = new Discord.Client();

function forceLower(message.content) 
{
message.content=message.content.toLowerCase();
}


client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PANG PING PANG PING MATAMU COK');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
