const discord = require('discord.js');
const client = new discord.Client();
const userCreatedVote = new Map();
const userCreatedPolls = new Map();

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
  if (msg.author.id === client.user.id || msg.author.bot) return;
  if (message.content.toLowerCase() === '!ping) {
        message.channel.send("Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

          // Basic embed
            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping}`)
            .setColor("3066993")
            
            m.edit(embed)
        });
  }
  else if (message.content.toLowerCase() === '!uptime) {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
  /*
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
  */
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
  else if(msg.isMentioned("208849229903298560")){
    msg.channel.send('<@208849229903298560> DICARIIN TUH');
  }
  /*
  else if(msg.content.includes ("bapau") || msg.content.includes ("bapao") || msg.content.includes ("BAPAO")){
    msg.channel.send('EX <@216802455734845442>');
  }
  */
});

//Pantau apa ada member masuk
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'datang_akan_pergi');
  // Send the message, mentioning the member
  channel.send(`HALO NJING ${member} MET DATANG DI VENTUROUS, GA USAH TERLALU KAKU YA TOD, SANTAI AJA HEHE.`);
});
//Polling System
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!rv') {
        if(userCreatedVote.has(message.author.id)) {
            message.channel.send("MASIH ADA VOTE NJING");
            return;
        }
        message.channel.send("MASUKIN OPSINYA NJING, MAKSIMAL 5 YA TOD");
        let filter = m => {
            if(m.author.id === message.author.id) {
                if(m.content.toLowerCase() === 'acak') collector.stop();
                else return true;
            }
            else return false;
        }
        let collector = message.channel.createMessageCollector(filter, { maxMatches: 5 });
        let voteOptions = await getVoteOptions(collector);
        if(voteOptions.length < 2) {
            message.channel.send("KALO VOTING MINIMAL ADA 2 OPSI GOBLOK");
            return;
        }
        let embed = new discord.RichEmbed();
        embed.setTitle("LIST NYA");
        embed.setDescription(voteOptions.join("\n"));
        let confirm = await message.channel.send(embed);
        
        await confirm.react('✅');
        await confirm.react('❎');

        let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
        let reaction = (await confirm.awaitReactions(reactionFilter, { max: 1 })).first();
        if(reaction.emoji.name === '✅') {
            message.channel.send("VOTING BAKAL DIACAK 2 DETIK LAGI NJING");
            await delay(2000);
            message.channel.send("LAGI DIACAK NJING");
            let userVotes = new Map();
            let voteTally = new discord.Collection(voteOptions.map(o => [o, 0]));
            let voteFilter = m => !m.bot;
            let voteCollector = message.channel.createMessageCollector(voteFilter, {
                time: 3000
            });
            userCreatedVote.set(message.author.id, voteCollector);
            await processVoteResults(voteCollector, voteOptions, userVotes, voteTally);
            let embed = new discord.RichEmbed();
            let desc = '';
            embed.setDescription(desc);
            var x = getRandomInt(1, 5);
            while(voteOptions.length < x){
               x = getRandomInt(1, 5)
            }message.channel.send("Hasilnya: " + voteOptions[x-1]);
        }   
        else if(reaction.emoji.name === '❎') {
            message.channel.send("VOTE DIBATALIN NJING");
        }
    }
    else if(message.content.toLowerCase() === '!stopvote') {
        if(userCreatedVote.has(message.author.id)) {
            message.channel.send('OTW NJING');
            userCreatedVote.get(message.author.id).stop();
            userCreatedVote.delete(message.author.id);
        }
        else {
            message.channel.send("APANYA YANG DI STOP NJING? KAN LAGI GAK ADA VOTE");
        }
    }
    else if(message.content.toLowerCase() === '!cpoll') {
        if(userCreatedPolls.has(message.author.id)) {
            message.channel.send("MASIH ADA POLLING NJING");
            return;
        }
        message.channel.send("MASUKIN OPSINYA NJING, MAKSIMAL 5 YA TOD");
        let filter = m => {
            if(m.author.id === message.author.id) {
                if(m.content.toLowerCase() === 'mulai') collector.stop();
                else return true;
            }
            else return false;
        }
        let collector = message.channel.createMessageCollector(filter, { maxMatches: 5 });
        let pollOptions = await getPollOptions(collector);
        if(pollOptions.length < 2) {
            message.channel.send("KALO POLLING MINIMAL ADA 2 OPSI GOBLOK");
            return;
        }
        let embed = new discord.RichEmbed();
        embed.setTitle("LIST PILIHAN");
        embed.setDescription(pollOptions.join("\n"));
        console.log(pollOptions[1]);
        let confirm = await message.channel.send(embed);
        
        await confirm.react('✅');
        await confirm.react('❎');

        let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
        let reaction = (await confirm.awaitReactions(reactionFilter, { max: 1 })).first();
        if(reaction.emoji.name === '✅') {
            message.channel.send("POLLING BAKAL DIMULAI 1 DETIK LAGI NJING");
            await delay(1000);
            message.channel.send("VOTE SEKARANG TOD!");
            let userVotes = new Map();
            let pollTally = new discord.Collection(pollOptions.map(o => [o, 0]));
            let pollFilter = m => !m.bot;
            let voteCollector = message.channel.createMessageCollector(pollFilter, {
                time: 10000
            });
            userCreatedPolls.set(message.author.id, voteCollector);
            await processPollResults(voteCollector, pollOptions, userVotes, pollTally);
            let max = Math.max(...pollTally.array());
            let entries = [...pollTally.entries()];
            let winners = [];
            let embed = new discord.RichEmbed();
            let desc = '';
            entries.forEach(entry => entry[1] === max ? winners.push(entry[0]) : null);
            entries.forEach(entry => desc  += entry[0] + " MENERIMA " + entry[1] + " VOTE\n");
            embed.setDescription(desc);

            if(winners.length === 1) {
                message.channel.send(winners[0] + " YANG MENANG NJING", embed);
            }
            else {
                message.channel.send("LAH KOK SERI ANJING", embed);
            }
        }   
        else if(reaction.emoji.name === '❎') {
            message.channel.send("POLL DIBATALIN NJING");
        }
    }
    else if(message.content.toLowerCase() === '!stoppoll') {
        if(userCreatedPolls.has(message.author.id)) {
            message.channel.send('OTW NJING');
            userCreatedPolls.get(message.author.id).stop();
            userCreatedPolls.delete(message.author.id);
        }
        else {
            message.channel.send("APANYA YANG DI STOP NJING? KAN LAGI GAK ADA VOTE");
        }
    }
});

function processVoteResults(voteCollector, voteOptions, userVotes, voteTally) {
    return new Promise((resolve, reject) => {
        voteCollector.on('collect', msg => {
            let option = msg.content.toLowerCase();
            if(!userVotes.has(msg.author.id) && voteOptions.includes(option)) {
                userVotes.set(msg.author.id, msg.content);
                let voteCount = voteTally.get(option);
                voteTally.set(option, ++voteCount);
            }
        });
        voteCollector.on('end', collected => {
            resolve(collected);
        })
    });
}

function getVoteOptions(collector) {
    return new Promise((resolve, reject) => {
        collector.on('end', collected => resolve(collected.map(m => m.content)));
    });
}

function processPollResults(voteCollector, pollOptions, userVotes, pollTally) {
    return new Promise((resolve, reject) => {
        voteCollector.on('collect', msg => {
            let option = msg.content.toLowerCase();
            if(!userVotes.has(msg.author.id) && pollOptions.includes(option)) {
                userVotes.set(msg.author.id, msg.content);
                let voteCount = pollTally.get(option);
                pollTally.set(option, ++voteCount);
            }
        });
        voteCollector.on('end', collected => {
            console.log("Collected " + collected.size + " votes.");
            resolve(collected);
        })
    });
}

function getPollOptions(collector) {
    return new Promise((resolve, reject) => {
        collector.on('end', collected => resolve(collected.map(m => m.content.toLowerCase())));
    });
}

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
