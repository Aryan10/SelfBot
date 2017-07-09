const Discord = require('discord.js');
const client = new Discord.Client();
const pre = require("./prefix.json");
const prefix = pre.prefix;
const rohink_prefix = pre.rohink_prefix;
const pokegamer_prefix = pre.pokegamer_prefix;
const ryan_prefix = pre.ryan_prefix;
const dusk_prefix = pre.dusk_prefix;
const sceptile_prefix = pre.sceptile_prefix;
client.login(process.env.TOKEN);

client.on('message', message => {
if (client.user.id === "311906389998043136"){
  if (message.guild.id === "275936975616212992"){
  const spy = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.avatarURL)
  .setColor(0xFFFFFF)
  .setFooter(`<@${message.author.id}>`)
  .setDescription(message.content)
  .setThumbnail(message.author.avatarURL)
    client.guilds.find('name', 'Spy').channels.find('name', message.channel.name).send({embed: spy});
  }
}
if (message.author.id !== client.user.id) return;
const args = message.content.split(" ");
const command = args.shift().slice(prefix.length);

if (message.content.startsWith(prefix)){
    if (message.author.discriminator !== "7484") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(sceptile_prefix)){
    if (message.author.discriminator !== "5805") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(rohink_prefix)){
    if (message.author.discriminator !== "4066") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(pokegamer_prefix)){
    if (message.author.discriminator !== "5095") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(ryan_prefix)){
    if (message.author.discriminator !== "3770") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(dusk_prefix)){
    if (message.author.discriminator !== "7022") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(prefix + sceptile_prefix)){
    if (message.author.discriminator !== "7484") return;
    if (client.user.discriminator !== "5805") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(prefix + rohink_prefix)){
    if (message.author.discriminator !== "7484") return;
    if (client.user.discriminator !== "4066") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(prefix + pokegamer_prefix)){
    if (message.author.discriminator !== "7484") return;
    if (client.user.discriminator !== "5095") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(prefix + ryan_prefix)){
    if (message.author.discriminator !== "7484") return;
    if (client.user.discriminator !== "3770") return;
try {
let commandFile = require(`./commands/${command}.js`);
commandFile.run(client, message, args);
} catch (err) {
console.error(err);
}
}else
if (message.content.startsWith(prefix + dusk_prefix)){
    if (message.author.discriminator !== "7484") return;
    if (client.user.discriminator !== "7022") return;
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

