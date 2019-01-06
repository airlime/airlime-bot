const commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class VersionCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'baseline',
            group: 'inf',
            memberName: 'baseline',
            description: 'Returns version information.',
            examples: ['baseline']
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
        .setTitle("AIRLIME Bot | Baseline 2")
        .setColor('fbbd0b')
        .setDescription('Version 1.3 INDEV.')
        .setFooter("Made by Cesire")
        .setThumbnail("https://airlime.github.io/cdn/discord/icons/dev.png")
        .setAuthor("AIRLIME BOT", this.client.user.avatarURL);
        return msg.say(embed);
    }
};