exports.run = (client, message, args) => {

let messagecount = parseInt(params[0]);
message.channel.fetchMessages({
limit: 100
})
.then(messages => {
let msg_array = messages.array();
msg_array = msg_array.filter(m => m.author.id === client.user.id);
msg_array.length= messagecount + 1;
msg_array.map(m => m.delete().catch(console.error));
});
}