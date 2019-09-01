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

function forceLower(message.content) 
{
message.content=message.content.toLowerCase();
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
