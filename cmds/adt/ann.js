const commando = require('discord.js-commando')
const Discord = require ('discord.js')

module.exports = class mArgTestCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ann',
            group: 'adt',
            memberName: 'ann',
            description: 'Announce in #Channel',
            examples: ['!a_ann #welcome "Welcome all new Members" "We hope you\'ll make some friends here. Just remember to be nice to one another" "yellow" "AIRLIME TEAM"'],
            argsSingleQuotes: true,
            args: [
            {
                key: 'channel',
                prompt: 'Announce in what channel? (e.g #welcome)',
                type: 'channel'
            },
            {
                key: 'title',
                prompt: 'Title (e.g Important Information)',
                type: 'string'
            },
            {
                key: 'description',
                prompt: 'Description (e.g New Rules Are Coming)',
                type: 'string'
            },
            {
                key: 'authorname',
                prompt: 'AUTHOR',
                type: 'string',
                default: 'AIRLIME BOT'
            },
            {
                key: 'color',
                prompt: 'Color (e.g green)',
                type: 'string',
                default: 'green'
            }
        ]
    });
}

    run(msg, { channel, title, description, authorname, color }) {
        console.log(channel)
        console.log(title)
        const embed = new Discord.RichEmbed()
        .setTitle(title)
        .setDescription(description)
        //.setColor = color
        .setAuthor(authorname);

        this.client.channels.get(channel.id).send(embed);
    }
};