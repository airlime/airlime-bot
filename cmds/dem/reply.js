const commando = require('discord.js-commando');

module.exports = class ReplyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'dem',
            memberName: 'reply',
            description: 'Replies with a Message.',
            examples: ['reply']
        });
    }

    run(msg) {
        return msg.say('Hi, I\'m awake!');
    }
};