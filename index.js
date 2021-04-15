const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
require("./util/eventHandler")(bot)
require('dotenv').config();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
      return console.log("[LOGS] Couldn't Find Commands!");
    }
  
    jsfile.forEach((f, i) => {
      let pull = require(`./commands/${f}`);
      bot.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
        bot.aliases.set(alias, pull.config.name)
      });
    });
  });

  bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.channel.permissionsFor(bot.user.id).has("SEND_MESSAGES")) return;
      const botprefix = "c!"
        if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
          return message.channel.send(`${message.guild.name}'s Prefix is \`${botprefix}\`\nUse \`${botprefix}help\` for a the help page.`)
            }
        if(message.content.indexOf(botprefix) !== 0) return;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1)
  
        if (!message.content.startsWith(botprefix)) return;
        let commandfile = bot.commands.get(cmd.slice(botprefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(botprefix.length)))
        if (commandfile) commandfile.run(bot, message, args)
  
  
          })



bot.login(botsettings.token)