const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('ping.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'ping':

            message.channel.sendMessage('pong!');

            break;
    }
});