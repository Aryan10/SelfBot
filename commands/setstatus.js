exports.run = (client, message, args) => {

message.delete();
client.user.setStatus(message.content.split(' ').slice(1).join(" "))
}