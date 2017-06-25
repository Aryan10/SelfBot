exports.run = (client, message, args) => {
  
  message.delete()
const Discord = require ("discord.js");
const embed = new Discord.RichEmbed()
.setColor(0x7EC0EE)
.setDescription(message.content.split(" ").slice(1).join(" "))
message.channel.send({embed});
}
