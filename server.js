const Discord = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true
});

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(`with ʜყ℘г Fam`, {
type: "Playing",
url: "https://www.twitch.tv/discord.gg"})
    .then(presence => console.log(`HYPR OFFICIAL ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
});

client.on("message", async message => {
  
  const Work = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(Work)) {
    message.reply(`Busy`);
    
  }});

client.login("NzY0OTA0MTE1MTY3Mjk3NTQ5.X4NCoA.eqmJss3Kd01rNMaC7ZsXHucXFWw");
