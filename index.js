const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '×';
client.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
if (guild.id !== '290162830009696257') return;
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

if(message.content.startsWith(prefix + 'setgame'))u {
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
message.delete();
client.user.setGame(playing)
}

});
