const Discord = require('discord.js');
  
module.exports = bot => {
const { Client } = require('discord.js');


console.log(`✅|${bot.user.username} is up and working`) +
bot.user.setStatus("online"); 

let statuses = [
 `Over T-Rex's plays`,
 `@ me for more info`,
 `Over the Stock Market`,
 `Cool Trades`
];


setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {type: "WATCHING"});
}, 12000);

}