exports.run = (client, message, args) => {

message.delete();
client.user.setGame(message.content.split(' ').slice(1).join(" "), 'setStream().js')
}
