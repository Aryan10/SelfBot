exports.run = (client, message, args) => {
const getSpy = client.guilds.get('275936975616212992');
const findSpy = client.guilds.find('id', '275936975616212992');

const clean = text => {
if (typeof(text) === "string") {
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
}else {
return text;
}

}
try {
const args = message.content.split(' ').slice(1);
const code = args.join(' ');
let evaled = eval(code);
if (typeof evaled !== 'string')
evaled = require('util').inspect(evaled);
   message.delete()
message.channel.send({embed: {
color:3447003,
title:'EVAL',
description:`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``,
footer:clean(evaled)
}});
} catch (err) {
      message.channel.send({embed: {
      title:'EVAL ERROR',
      description:`**ERROR**\`\`\`xl\n${clean(err)}\n\`\`\``
      }});
}
}
