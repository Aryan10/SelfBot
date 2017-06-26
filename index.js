const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "×";
const rohink_prefix = ".";
const pokegamer_prefix = "+";
const ryan_prefix = "?";
const dusk_prefix = "d-";
client.login(process.env.TOKEN);

client.on('message', message => {
if (message.author.id !== client.user.id) return;
const args = message.content.split(" ");
const command = args.shift().slice(prefix.length); 

if (message.content.startsWith(prefix)){
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(rohink_prefix)){
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(pokegamer_prefix)){
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(ryan_prefix)){
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(dusk_prefix)){
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else {
return;
}
});

client.on('guildMemberAdd', member => {
if (member.guild.id !== '290162830009696257') return;
if (client.user.id !== "273865811133857792") return;
member.guild.defaultChannel.send(`Welcome ${member}`);
});

process.on("unhandledRejection", err => {
    console.log(err.stack);
});
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));

