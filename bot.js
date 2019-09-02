const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TOD BOT IS HERE NJING');
});
 

client.on("message", async message => {
  if (message.content.toLowerCase().includes("Dan")){
    // right that is needed to kill the loop ->
    if(message.author.bot) return; 
    return message.reply("We love you Dan!");
    // could also use -> message.channel.send("We love you Dan!")
  } 
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
