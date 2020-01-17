const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Porn", { type: "WATCHING"});
});

//Fungsi
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Pantau chat
client.on('message', msg => {
  if (msg.content.includes ("ping")) {
    msg.reply('BERISIK ANJING');
  }
  else if (msg.content.includes ("aldo") || msg.content.includes ("aldog")) {
    msg.reply('<@292889185252278272> ANJING');
  }
  else if (msg.content.includes ("asu") || msg.content.includes ("asw")) {
    msg.reply('MUKELU KEK ASU');
  }
  else if (msg.content.includes ("anjing") || msg.content.includes ("ajg") || msg.content.includes ("anjeng")) {
    msg.reply('MUKELU KEK ANJING');
  }
  else if (msg.content.includes ("ngentot") || msg.content.includes ("ngentod") || msg.content.includes ("ngntd")) {
    msg.reply('NGENTAT NGENTOT, BOCIL MASIH COKIL AE KASAR BET ANJING');
  }
  else if (msg.content.includes ("bangsat") || msg.content.includes ("bgst") || msg.content.includes ("bngst")) {
    msg.reply('BANGSAT LO KASAR BANGET');
  }
  else if (msg.content.includes ("lonte")) {
    msg.reply('LONTE? MUKAMU KEK LONTE');
  }
  else if (msg.content.includes ("kontol") || msg.content.includes ("kntl")) {
    msg.reply('KONTOLMU CURVED');
  }
  else if (msg.content.includes ("memek") || msg.content.includes ("kemem") || msg.content.includes ("mmk") || msg.content.includes ("mmq") || msg.content.includes ("memeq") || msg.content.includes ("memex")) {
    msg.reply('MEMEK TEMBEM KEK KUE APEM');
  }
  else if (msg.content.includes ("kentod") || msg.content.includes ("kentot") || msg.content.includes ("netnot")) {
    msg.reply('MANGGIL LU TOD <@267473212626042882>');
  }
  else if (msg.content.includes ("nigga") || msg.content.includes ("nigger") || msg.content.includes ("nigg") || msg.content.includes ("niggward") || msg.content.includes ("nigward")) {
    msg.reply('GABOLEH RASIS ANJING, YA GAK <@267473212626042882>');
  }
  else if (msg.content.includes ("dipo")) {
    msg.reply('CLOUD SERVICE :heart:');
  }
  else if (msg.content.includes ("fuck")) {
    msg.reply('AHHH...YAMETE KUDASAIIII');
  }
  else if (msg.content.includes ("asshole")) {
    msg.reply('LOBANG PANTATMU HITAM');
  }
  else if (msg.content.includes ("oka")) {
    msg.channel.send('MOST ADORABLE MAN IN THE WORLD :heart:');
  }
  else if (msg.content.includes ("wtf")) {
    msg.reply('WHAT THE FROG?');
  }
  else if (msg.content.includes ("jadi gini")) {
    msg.reply('GIMANA GAN?');
  }
  else if (msg.content.includes ("babi")) {
    msg.channel.send('<@216802455734845442>');
  }
  else if(msg.isMemberMentioned(client.user)) {
    msg.channel.send('APA NJING?');
  }
  else if (msg.content.toLowerCase().startsWith("!coinflip")) {
		var msg2 = Array(2);
		msg2[1] = "Heads";
	    	msg2[2] = "Tails";
        var x = getRandomInt(1, 8);
		if (x < 4){
			msg.channel.send(msg2[1]);
		}
		else{
			msg.channel.send(msg2[2]);
		}
  }
  else if (msg.content.toLowerCase().startsWith("!random")) {
    msg.channel.send(getRandomInt(1, 10));
  }
});

//Pantau apa ada member masuk
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'datang_akan_pergi');
  // Send the message, mentioning the member
  channel.send(`HALO NJING ${member} MET DATANG DI VENTUROUS, GA USAH TERLALU KAKU YA TOD, SANTAI AJA HEHE.`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
