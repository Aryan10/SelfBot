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

if(message.content.startsWith(prefix + 'help')){ 
if(message.channel.id !== '322735410319065088') return;
message.channel.send({embed: {
color:3447003,
fields: [{
name:'Current Commands',
value:'`setgame, say, setavatar`'},
{
name:'Member Exclusive Commands',
value:'_POKEGAMER#5095_\n`members`\n_Aryan 10#7484_\n`eval, help`'},
{
name:'SelfBots Prefix',
value:'Aryan 10#7484 `×`\nPOKEGAMER#5095 `+`\nryan#3770 `?`\nDuskSkeleton303//MysteriousMage#7022 `d-`'},
]
}});
}

if(message.content.startsWith(prefix + 'say')) {
let argss = message.content.split(" ").slice(1);
let tempmsg = argss.join(" ");
message.delete();
return message.channel.send({embed: {
color:3447003,
description:tempmsg
}});
}

if (message.content.startsWith(prefix + 'eval')) {
const clean = text => {
if (typeof(text) === "string") {
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
}else {
return text;
}

}
try {
const args = message.content.split(' ').slice(1);
const code = args.join(' ');
let evaled = eval(code);
if (typeof evaled !== 'string')
evaled = require('util').inspect(evaled);
message.delete()
message.channel.send({embed: {
color:3447003,
title:'EVAL',
description:`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``
}});
} catch (err) {
      message.channel.send({embed: {
      title:'EVAL ERROR',
      description:`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``
      }});
}
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

