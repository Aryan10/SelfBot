exports.run = (client, message, args) => {

message.edit(`Total Members in **${message.guild.name}**: ***${message.guild.memberCount}***`)
}