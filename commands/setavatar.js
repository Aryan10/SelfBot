exports.run = (client, message, args) => {

message.delete();
client.user.setAvatar(message.content.split(' ').slice(1).join(" "))
}