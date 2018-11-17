const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('BY : m7md');
client.user.setPresence({
  status: 'ONLINE',
  game: { 
     type: 0,
     name: 'SoftNetwork',
     details: `1kkk.`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `SoftNetwork`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'SoftNetwork',
        large_image: `377480353259978752`,
        large_text: `1kkkkk` }

  }
    });
});


client.login(process.env.BOT_TOKEN);
