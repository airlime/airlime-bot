const Discord = require('discord.js')
const Commando = require('discord.js-commando')

class AnnCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ann',
            group: 'adm',
            memberName: 'ann',
            description: 'Announce in #Channel Embed Style'
        
        });
    }
    async run (message, args) 
    {
        let channel = message.mentions.channels.first().id
        console.log(message.content)
        let title = args[1]
        let description = args[2]

        const embed = new Discord.RichEmbed()
        .setTitle(title)
        .setColor('29665')
        .setDescription(description)
        console.log("LOGGING IN")
        client.channels.get(channel).send(embed)
    }
}

module.exports = AnnCommand;