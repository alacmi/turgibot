const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('inf.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'inf':

            if (args[1] === 'server') {
                message.channel.sendMessage('the server name is asaf\'s offical server');
            } else {
                message.channel.sendMessage('Invalid args')
            }

            break;
    }
});