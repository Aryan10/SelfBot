exports.run = (client, message, args) => {

message.delete()
if(message.mentions.members.first() === client.user){
message.member.setNickname(client.user.username);
}else {
message.member.setNickname(message.mentions.members.first().displayName)
client.user.setAvatar(message.mentions.users.first().avatarURL);
}

}