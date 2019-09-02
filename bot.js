const Discord = require('discord.js');
const client = new Discord.Client();
const args = message.content.trim().split(/\s+/g); 

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});


client.on('message', async message => {
    if(message.author.id === client.user.id) return;
    
    if(/good job/i.test(message.content)) {
      message.channel.send('Good job everyone :smirk:'); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
