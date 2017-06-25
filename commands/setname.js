exports.run = (client, message, args) => {

message.delete();
client.user.setUsername(message.content.split(' ').slice(1).join(" "))
}