const config = require('./config.json')
const commando = require('discord.js-commando');
require('dotenv').config();
const client = new commando.Client(config.commando);
let status = process.env.NODE_ENV;

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['adt','ADMIN'],
        ['dem','Demo'],
        ['inf','Info']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(__dirname + '/cmds');

client.on('ready', () => {
    if (status == 'development') {
        client.user.setActivity('DEV')
    } else {
        console.log('Ready');
        client.user.setActivity('A I R L I M E');
    }
});

client.login();