const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('clear.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'clear':

            if (!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);

            break;
    }
});