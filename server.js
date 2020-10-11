const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(`ok`, {
type: "STREAMING",
url: "https://www.youtube.com/channel/UCF8EBnJskNhd-JON7D4CgpA"})
    .then(presence => console.log(`DM BOT OF HYPE OFFICIAL  ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
  let channel = client.channels.get('709459156125614080'); 
channel.join()
});

client.login('NjkxOTAzNjM4NTk1MTc0NDMw.X1sgrg.cArZ9JLpQNbRU_7tOb4Iw6ghLTs');
 