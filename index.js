const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '×';

client.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
if (member.guild.id !== '290162830009696257') return;
member.guild.defaultChannel.send('Welcome:smiley:');
});

client.on('message', message => {
if (message.author.id !== client.user.id) return;
if (!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + 'say')) {
let argss = message.content.split(" ").slice(1);
let tempmsg = argss.join(" ");
message.delete();
return message.channel.send({embed: {
color:3447003,
description:tempmsg
}});
}

if(message.content.startsWith(prefix + 'setgame')) {
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
message.delete();
client.user.setGame(playing)
}

if(message.content.startsWith(prefix + 'setavatar')){
let newavatartime = message.content.split(" ").slice(1);
let blasty = newavatartime.join(" ");
message.reply('New Avatar Set!');
client.user.setAvatar(blasty);
}

});

process.on("unhandledRejection", err => {
    console.log(err.stack);
});
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));

