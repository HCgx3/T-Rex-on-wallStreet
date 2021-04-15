const Discord = require("discord.js")
const channelid = require('../Id/channelid.json')

module.exports.run = async (bot, message, args) => {
   if(message.author.id != '628224934472318986'){
       return;
    }
//channels
    let trexChannel = bot.channels.cache.get(channelid.trexserver)
    let le = bot.channels.cache.get(channelid.Le)
    let lc = bot.channels.cache.get(channelid.lc)
    let ut = bot.channels.cache.get(channelid.ut)
//---------------



    let t = args[0]
    let ticker = t.toUpperCase()

    let tp = args[1]
    let targetPrice = tp.toUpperCase()

    let sl = args[2]

    let comment = message.content.split(" ").slice(4).join(" ");

    

    const buy = new Discord.MessageEmbed()
        .setTitle("T-Rex's Plays - Buy")
        .setDescription(`**[🚀]Ticker:** ${ticker || `Not Provided`}
        **[🟢]Target Price:** ${targetPrice || `Not Provided`}
        **[🔴]Stop Loss:** $${sl || `Not Provided`}
        **[💬]Comments:** ${comment || `Not Provided`}
        `)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        .setTimestamp()
        .setFooter("T-Rex • Disclaimer - For educational and entertainment purposes only, does not constitute investment advice.")
        .setColor('GREEN')

        //trex server
        le.send('<@&812557888056852481>', buy)
        trexChannel.send('<@&831709278883938334>', buy)
        ut.send('<@&>', buy)
        //trexChannel.send(buy)


     
    
}

module.exports.config = {
    name: "buy",
    description: "buy command",
    usage: "c!buy",
    accessableby: "Trex",
    aliases: ['b']
}