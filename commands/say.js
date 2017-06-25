exports.run = (client, message, args) => {
  
const Discord = require ("discord.js");
const embed = new Discord.RichEmbed()
.setColor(0x7EC0EE)
.setDescription(message.content.split(" ").slice(1).join(" "))
message.edit({embed});
}
