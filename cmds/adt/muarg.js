const commando = require('discord.js-commando')

module.exports = class mArgTestCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'msay',
            group: 'adt',
            memberName: 'msay',
            description: 'SAY THIS.',
            examples: ['say whatever!'],
            argsSingleQuotes: true,
            args: [
            {
                key: 'text',
                prompt: 'What text would you like the bot to say?',
                type: 'string'
            },
            {
                key: 'text',
                prompt: 'What text would you like the bot not to say?',
                type: 'string'
            }
        ]
    });
}

    run(msg, { text }) {
        //msg.delete();
        this.client.channels.get('530877651259490344').send(text);
    }
};