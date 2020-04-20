const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('info.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'info':

            if (args[1] === 'version') {
                message.channel.sendMessage('version ' + Version);
            } else {
                message.channel.sendMessage('Invalid args')
            }

            break;
    }
});