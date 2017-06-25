exports.run = (client, message, args) => {

message.delete();
message.member.setNickname(message.content.split(' ').slice(1).join(" "))
}