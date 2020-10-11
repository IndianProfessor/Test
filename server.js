const Discord = require('v11-discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(`with ʜყ℘г Fam`, {
status: "idle",
type: "Playing",
url: "https://www.twitch.tv/discord.gg"})
client.user.setStatus('idle')
    .then(presence => console.log(`HYPR OFFICIAL ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
});

client.login('NzY0ODc1NTI0OTEyMTg1Mzg0.X4MpNA.DocLYG_rvaPPPCyO8j0_pTu24Dk');
