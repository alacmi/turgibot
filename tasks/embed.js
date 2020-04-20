const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('embed.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'embed':
            const embed = new discord.RichEmbed()
                .setTitle('user Information')
                .addField('Player Name', message.author.username, true)
                .addField('Version ', Version)
                .addField('Current Server', message.guild.name, true)
                .setColor(0x46B0F6)
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);

            break;
    }
});