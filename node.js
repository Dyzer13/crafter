const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "k";

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "513323053334396928") return;
 
if (message.content.startsWith(PREFIX + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}
 
if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
}
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});


client.login(process.env.BOT_TOKEN);
