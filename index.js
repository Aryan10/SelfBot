const Discord = require('discord.js');
const client = new Discord.Client();
const me = "273865811133857792";
const pokegamer = "309311003303215108"
const ryan = "280749589974482945"
const dusk = "256049054633558016"
client.login(process.env.TOKEN);
if (client.user.id === me) {
const prefix = "×";
}else
if (client.user.id === pokegamer) {
const prefix = "+";
}else
if (client.user.id === ryan) {
const prefix = "?";
}else
if (client.user.id === dusk) {
const prefix = "d-";
}

client.on('message', message => {
if (message.author.id !== client.user.id) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.split(" ");
const command = args.shift().slice(config.prefix.length);  
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
});

client.on('guildMemberAdd', member => {
if (member.guild.id !== '290162830009696257') return;
if (client.user.id !== me) return;
member.guild.defaultChannel.send('Welcome:smiley:');
});

process.on("unhandledRejection", err => {
    console.log(err.stack);
});
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));

