const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('kick.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'kck':

            if (!args[1]) message.channel.send('You need to specify a person!')

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('you were kicked from the server!').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply(`I was unable to kick the member`);
                        console.log(err);
                    });
                } else {
                    message.reply(`That user isn\'t in the this gulid`)
                }
            } else {
                message.reply(`That user isn\'t in the this gulid`)
            }

            break;
    }
});