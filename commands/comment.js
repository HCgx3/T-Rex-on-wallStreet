const Discord = require("discord.js")
const channelid = require('../Id/channelid.json')

module.exports.run = async (bot, message, args) => {
    if(message.author.id != '628224934472318986'){
        return;
    }

    let trexChannel = bot.channels.cache.get(channelid.trexserver)
    let le = bot.channels.cache.get(channelid.le)
    let lc = bot.channels.cache.get(channelid.lc)
    let ut = bot.channels.cache.get(channelid.ut)

    let comment = message.content.split(" ").slice(1).join(" ");

    

    const c = new Discord.MessageEmbed()
        .setTitle("T-Rex's Comments")
        .setDescription(`**[💬]Comment:** ${comment || `Not Provided`}
        `)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        .setTimestamp()
        .setFooter("T-Rex • Disclaimer - For educational and entertainment purposes only, does not constitute investment advice.")
        .setColor('YELLOW')

        le.send('<@&812557888056852481>', c)
        trexChannel.send('<@&831709278883938334>', c)
        ut.send('<@&>', c)


     
    
}

module.exports.config = {
    name: "comment",
    description: "comment command",
    usage: "c!c",
    accessableby: "Trex",
    aliases: ['c']
}